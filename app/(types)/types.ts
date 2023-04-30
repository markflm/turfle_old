export type Guess = {
  playerId: number;
  playerDescription: string; //Name | RB | Team shown in the autocomplete
};

//export type GuessResponse = {
//  guess: string;
//  age: number;
//  currentTeam: string;
//  position: string;
//  //this will be for  telling the user how close their guess was.
//  guessAttributes: {
//    age: string; //higher, lower, or correct
//    currentTeam: string; //same conference, difference conference, or correct. I think saying it's in the same division might be too much of a hint, but open to it
//    position: string; //same 'side' (offense v.s. defense), different side, or correct
//  };
//};

export type GuessResponse = {
  playerInfo: PocketbaseNflPlayerRecord;
  correct: boolean;
  guessAttributes: GuessHintValues;
};

export type GuessHintValues = {
  age: GuessHintValuesAgeEnum;
  team: GuessHintValuesTeamEnum;
  position: GuessHintValuesPositionEnum;
};

export enum GuessHintValuesAgeEnum {
  correct = "CORRECT",
  incorrectCloseLower = "INCORRECT_CLOSE_LOWER",
  incorrectNotCloseLower = "INCORRECT_NOT_CLOSE_LOWER",
  incorrectCloseHigher = "INCORRECT_CLOSE_HIGHER",
  incorrectNotCloseHigher = "INCORRECT_NOT_CLOSE_HIGHER"
}

export enum GuessHintValuesTeamEnum {
  correct = "CORRECT",
  incorrectSameConference = "INCORRECT_SAME_CONF",
  incorrectDifferentConference = "INCORRECT_DIFF_CONF"
}

export enum GuessHintValuesPositionEnum {
  correct = "CORRECT",
  incorrectSameSide = "INCORRECT_SAME_SIDE",
  incorrectDifferentSide = "INCORRECT_DIFF_SIDE"
}

//export type GuessAttributes = {
//  age: GuessHintValues["age"];
//};

export type PocketbaseNflPlayerRecord = {
  age: number;
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  potd_number: number;
  name: string;
  position: string;
  team: string;
  teamimageurl: string;
  updated: string;
};

export type PocketbaseNflPlayerResponse = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: 1;
  items: PocketbaseNflPlayerRecord[];
};

export type PlayerIdAndAutocompleteIdentifier = {
  playerId: string;
  firstName: string;
  lastName: string;
  autocompleteIdentifier: string;
  teamImageUrl: string;
};
