"use client";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box, Button, Input, Stack, createFilterOptions } from "@mui/material";
import { PlayerIdAndAutocompleteIdentifier } from "./(types)/types";

export type GameSearchProps = {
  autofillValues: PlayerIdAndAutocompleteIdentifier[];
  handleGuess: (playerId: string) => Promise<void>;
};

function GameSearch(props: GameSearchProps) {
  console.log("rerender");

  const { autofillValues, handleGuess } = props;
  //console.log(autofillValues);
  const [autoCompleteValue, setAutoCompleteValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [temp, setTemp] = useState<boolean>();
  const router = useRouter();

  const onInputChange = (value: string) => {
    console.log("onInputChange " + value);
    if (value && !value.match(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g)) return;
    console.log("pass");
    setInputValue(value);
  };

  async function onAutoCompleteChange(selectedPlayer: PlayerIdAndAutocompleteIdentifier | null) {
    console.log("picked player:");
    console.log(selectedPlayer);

    //ask the backend if I'm right
    if (selectedPlayer) await handleGuess(selectedPlayer.playerId);
  }

  //todo - this needs to filter out already-guessed players
  const options = useMemo(
    () => {
      //return ["ABC", "DEF", "A22", "FGG"];
      return autofillValues;
      //return playerNames
      //  .map((playerName) => ({
      //    player: playerName,
      //    score: playerName.nickname.match(new RegExp(`^${inputValue}`, 'i'))?.length
      //      ? 100
      //      : playerName.nickname.match(new RegExp(inputValue, 'i'))?.length || 0,
      //  }))
      //  .sort((a, b) => b.score - a.score)
      //  .map((r) => ({
      //    id: r.player.id,
      //    label: `${r.player.nickname} - ${r.player.name}`,
      //  }));
    },
    /*[playerNames, inputValue]*/ []
  );
  const filterOptions = createFilterOptions({
    matchFrom: "any",
    stringify: (option: PlayerIdAndAutocompleteIdentifier) => option.firstName + option.lastName
  });
  return (
    //autoFocus on the TextField doesn't work on load - have to click out and back in or your inputs keep getting deleted
    <Stack paddingY={2} spacing={1} sx={{ width: 600 }}>
      <Autocomplete
        className=" bg-slate-500"
        id="combo-box-demo"
        options={options}
        onChange={(event: any, newValue: PlayerIdAndAutocompleteIdentifier | null) => {
          onAutoCompleteChange(newValue);
        }}
        noOptionsText={inputValue.length <= 1 ? "Auto-fill starts at 2 characters" : "No results!"}
        getOptionLabel={(option) => option.autocompleteIdentifier}
        filterOptions={(options, state) => (state.inputValue.length > 1 ? filterOptions(options, state) : [])}
        renderInput={(params) => <TextField {...params} placeholder="Enter Player Name" />}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderOption={(props, option) => (
          <Box {...props} component="li" key={option.playerId} sx={{ display: "flex", flexDirection: "flex-row" }}>
            <div key={option.playerId + option.autocompleteIdentifier}>{option.autocompleteIdentifier}</div>
            <img
              key={option.playerId + option.teamImageUrl}
              loading="eager"
              width="28"
              src={option.teamImageUrl}
              alt="aaa"
            />
          </Box>
        )}
      />
      {/*<Button variant="contained" className=" bg-red-500">
        Guess
      </Button>*/}
    </Stack>
    //<Autocomplete
    //  className="bg-white"
    //  //freeSolo
    //  id="autocomplete-input"
    //  options={options}
    //  //onInputChange={(_id, value) => onInputChange(value)}
    //  inputValue={inputValue}
    //  open={inputValue.length > 0}
    //  getOptionLabel={(option: PlayerIdAndAutocompleteIdentifier) => option.autocompleteIdentifier || ""}
    //  renderOption={(props, option) => (
    //    //<Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
    //    <Box key={option.playerId} sx={{ display: "flex", flexDirection: "flex-row" }}>
    //      {option.autocompleteIdentifier}
    //      <img loading="lazy" width="20" src={option.teamImageUrl} alt="aaa" />
    //    </Box>
    //  )}
    //  renderInput={(params) => (
    //    <Input
    //      autoFocus
    //      onChange={(e) => onInputChange(e.target.value)}
    //      className="w-full"
    //      ref={params.InputProps.ref}
    //      inputProps={params.inputProps}
    //      name="search-input"
    //    ></Input>

    //    //<TextField
    //    //  {...params}
    //    //  label="Player Name"
    //    //  InputProps={{
    //    //    ...params.InputProps,
    //    //    type: "search"
    //    //  }}
    //    ///>
    //  )}
    ///>
  );
  //throw something similar on here to have team logos
  //  renderOption={(props, option) => (
  //    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
  //      <img
  //        loading="lazy"
  //        width="20"
  //        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
  //        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
  //        alt=""
  //      />
  //      {option.label} ({option.code}) +{option.phone}
  //    </Box>

  //if guesses
}

export default GameSearch;
