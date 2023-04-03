import Image from "next/image";
import { Inter } from "next/font/google";
import GameSearch from "./game-search";
import {
  PlayerIdAndAutocompleteIdentifier,
  PocketbaseNflPlayerResponse,
  PocketbaseNflPlayerRecord
} from "./(types)/types";

const inter = Inter({ subsets: ["latin"] });

async function getAllPlayers(): Promise<PocketbaseNflPlayerResponse> {
  //fetch all player names for autocomplete help
  const res = await fetch(`${process.env.POCKETBASE_URL}/api/collections/nfl_players/records`);
  return await res.json();
}

export default async function Home() {
  //const players = await getAllPlayers();
  const playersRaw: PocketbaseNflPlayerRecord[] = (await getAllPlayers()).items;
  const playerIdsAndIdentifiers: PlayerIdAndAutocompleteIdentifier[] = playersRaw.map((x) => {
    return {
      playerId: x.id,
      autocompleteIdentifier: `${x.name} | ${x.position} | ${x.team}`,
      teamImageUrl: x.teamimageurl
    };
  });
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-1/2">
        <GameSearch></GameSearch>
      </div>
      <span>Result Table goes here</span>
    </main>
  );
}
