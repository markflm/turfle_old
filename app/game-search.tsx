"use client";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function GameSearch() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const onInputChange = (value: string) => {
    if (value && !value.match(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g)) return;

    setInputValue(value);
  };

  const options = useMemo(
    () => {
      return ["ABC", "DEF", "A22", "FGG"];
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

  return (
    <Autocomplete
      style={{ width: 400 + "px" }}
      freeSolo
      id="autocomplete-input"
      options={options}
      onInputChange={(_id, value) => onInputChange(value)}
      inputValue={inputValue}
      open={inputValue.length > 0}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Player Name"
          InputProps={{
            ...params.InputProps,
            type: "search"
          }}
        />
      )}
    />
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
