import { Inter } from "next/font/google";
import {
  PlayerIdAndAutocompleteIdentifier,
  PocketbaseNflPlayerResponse,
  PocketbaseNflPlayerRecord
} from "./(types)/types";
import ClientContainer from "./client-container";

const inter = Inter({ subsets: ["latin"] });

async function getAllPlayers(): Promise<PocketbaseNflPlayerResponse> {
  //fetch all player names for autocomplete help
  const res = await fetch(`${process.env.POCKETBASE_URL}/api/collections/nfl_players/records`, {
    next: { revalidate: 10 }
  });
  //uncomment if you need to disable cache on the autofill req
  //const res = await fetch(`${process.env.POCKETBASE_URL}/api/collections/nfl_players/records`, { cache: "no-store" });
  return await res.json();
}

export default async function Home() {
  console.log("server re-ren");

  const playersRaw: PocketbaseNflPlayerRecord[] = (await getAllPlayers()).items;

  const playerIdsAndIdentifiers: PlayerIdAndAutocompleteIdentifier[] = playersRaw.map((x) => {
    return {
      playerId: x.id,
      firstName: x.name,
      lastName: "",
      autocompleteIdentifier: `${x.name} | ${x.position} | ${x.team}`,
      teamImageUrl: x.teamimageurl
    };
  });

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-gray-700">
      <div className=" text-3xl text-white font-semibold">Guess the NFL Player</div>
      <ClientContainer autofillSuggestions={playerIdsAndIdentifiers}></ClientContainer>
    </main>
  );
}
