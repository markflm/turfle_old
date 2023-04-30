import { format, addMinutes } from "date-fns";
import { pocketbase } from "@/utils/pocketbase";
import { NextResponse } from "next/server";
import {
  GuessHintValuesAgeEnum,
  GuessHintValuesPositionEnum,
  GuessHintValuesTeamEnum,
  GuessResponse,
  PocketbaseNflPlayerRecord
} from "@/app/(types)/types";
import { offensivePositions, defensivePositions } from "@/utils/constants/positionMap";
//ts ignore "params" type complaint
//@ts-ignore
export async function GET(request: Request, { params }) {
  console.log(params);
  const { playerId } = params;
  //if this is a get, ask pocketbase if the potd value on this request's playerId is = to today's potd
  //how do we know today's potd? tbd
  const guessedPlayer: PocketbaseNflPlayerRecord = await pocketbase.collection("nfl_players").getOne(playerId);
  //.getList(1, 1, {
  //    filter: "potd_number = 1"
  //  });
  const date = new Date();
  const newDate = addMinutes(date, date.getTimezoneOffset());
  const dateString = format(newDate, "yyyy-MM-dd kk:mm:ss");
  console.log("date string");
  console.log(dateString);
  const potdRecord = await pocketbase.collection("potd_schedule").getFirstListItem(`potd_date <= "${dateString}"`, {
    sort: "-potd_date"
  });

  const potd: PocketbaseNflPlayerRecord = await pocketbase
    .collection("nfl_players")
    .getFirstListItem(`potd_number = ${potdRecord.potd_number} `);

  const guessResponse = playerCompare(guessedPlayer, potd);
  return NextResponse.json({ response: "yo" });
}

function playerCompare(guess: PocketbaseNflPlayerRecord, potd: PocketbaseNflPlayerRecord): GuessResponse {
  const guessResponse = { playerInfo: guess } as GuessResponse;
  if (guess.id === potd.id) {
    //your guess is the potd;
    guessResponse.correct = true;
    guessResponse.guessAttributes = {
      age: GuessHintValuesAgeEnum.correct,
      team: GuessHintValuesTeamEnum.correct,
      position: GuessHintValuesPositionEnum.correct
    };
    return guessResponse;
  }
  if (guess.age != potd.age) {
    if (guess.age > potd.age) {
      guessResponse.guessAttributes.age =
        guess.age - potd.age < 3
          ? GuessHintValuesAgeEnum.incorrectCloseLower
          : GuessHintValuesAgeEnum.incorrectNotCloseLower;
    }
  } else {
    guessResponse.guessAttributes.age = GuessHintValuesAgeEnum.correct;
  }

  if (guess.position != potd.position) {
    if (offensivePositions.includes(guess.position) && offensivePositions.includes(potd.position))
      guessResponse.guessAttributes.position = GuessHintValuesPositionEnum.incorrectSameSide;
    else guessResponse.guessAttributes.position = GuessHintValuesPositionEnum.incorrectDifferentSide;
  } else {
    guessResponse.guessAttributes.position = GuessHintValuesPositionEnum.correct;
  }

  //do team check logic
  if (guess.team != potd.team) {
    //
  } else {
    guessResponse.guessAttributes.team = GuessHintValuesTeamEnum.correct;
  }
  return guessResponse;
}
