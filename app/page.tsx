import { Inter } from "next/font/google";
import GameSearch from "./game-search";
import {
  PlayerIdAndAutocompleteIdentifier,
  PocketbaseNflPlayerResponse,
  PocketbaseNflPlayerRecord
} from "./(types)/types";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

async function getAllPlayers(): Promise<PocketbaseNflPlayerResponse> {
  //fetch all player names for autocomplete help
  const res = await fetch(`${process.env.POCKETBASE_URL}/api/collections/nfl_players/records`, { cache: "no-store" });
  return await res.json();
}

export default async function Home() {
  console.log("server re-ren");
  //const players = await getAllPlayers();
  const playersRaw: PocketbaseNflPlayerRecord[] = (await getAllPlayers()).items;
  //console.log("players raw");
  //console.log(playersRaw);
  const playerIdsAndIdentifiers: PlayerIdAndAutocompleteIdentifier[] = playersRaw.map((x) => {
    return {
      playerId: x.id,
      firstName: x.name,
      lastName: "",
      autocompleteIdentifier: `${x.name} | ${x.position} | ${x.team}`,
      teamImageUrl: x.teamimageurl
    };
  });

  async function handleGuess(e: any) {
    "use server";
    //console.log("my guess is " + playerId);
    console.log(e);
  }
  //console.log("playerIdsAndIdents");
  //console.log(playerIdsAndIdentifiers);
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-gray-700">
      <div className="w-1/2">
        <GameSearch autofillValues={playerIdsAndIdentifiers} handleGuess={handleGuess}></GameSearch>
      </div>
      <span>Result Table goes here</span>
    </main>
  );
}
