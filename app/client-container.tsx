"use client";

import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box, Button, Input, Stack, createFilterOptions } from "@mui/material";
import { PlayerIdAndAutocompleteIdentifier } from "./(types)/types";
import GameSearch from "./game-search";
import ResultTable from "./game-result-table";

export type ClientProps = {
  autofillSuggestions: PlayerIdAndAutocompleteIdentifier[];
};

//receive guess from GameSearch, send ID to BE
//BE returns full player details with "guessAttributes" values
//this is saved in localstorage
//localstorage will be the only validation layer. It will track your number of guesses and the content of those guesses
//

function ClientContainer(props: ClientProps) {
  const [guesses, setGuesses] = useState();
  const { autofillSuggestions } = props;

  async function handleGuess(playerId: string) {
    console.log("cc handle");
    const askUrl = `${window.location.origin}/api/guess/${playerId}`;
    const res = await fetch(askUrl);
    console.log("res");
    console.log(res);
  }

  return (
    <div>
      <div className="w-1/2">
        <GameSearch autofillValues={autofillSuggestions} handleGuess={handleGuess}></GameSearch>
      </div>
      <ResultTable />
    </div>
  );
}

export default ClientContainer;
