import Image from "next/image";
import { Inter } from "next/font/google";
import GameSearch from "./game-search";

const inter = Inter({ subsets: ["latin"] });

async function getAllPlayers() {
  //fetch all player names for autocomplete help
}
export default async function Home() {
  //const players = await getAllPlayers();
  return (
    <main className=" font-bold">
      <GameSearch></GameSearch>
    </main>
  );
}
