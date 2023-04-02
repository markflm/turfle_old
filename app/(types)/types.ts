export type Guess = {
playerId: number,
playerDescription: string //Name | RB | Team shown in the autocomplete

}


export type GuessResponse = {
guess: string,
age: number,
currentTeam: string,
position: string,
//this will be for  telling the user how close their guess was. 
guessAttributes: {
age: string, //higher, lower, or correct
currentTeam: string, //same conference, difference conference, or correct. I think saying it's in the same division might be too much of a hint, but open to it
position: string //same 'side' (offense v.s. defense), different side, or correct
}
}
