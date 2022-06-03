//Pull random pokemon or move from a selected type
//0:Any
//1:Normal
//2:Fighting
//3:Flying
//4:Poison
//5:Ground
//6:Rock
//7:Bug
//8:Ghost
//9:Steel
//10:Fire
//11:Water
//12:Grass
//13:Electric
//14:Psychic
//15:Ice
//16:Dragon
//17:Dark
//18:Fairy

const url = "https://pokeapi.co/api/v2/type/";
const pokemonMap = new Map();

function getType(inputSelector) {
  const type = document.querySelector("#input").value;
  switch (type) {
    case "normal":
      typeInteger = 1;
      break;
    case "fighting":
      typeInteger = 2;
      break;
    case "flying":
      typeInteger = 3;
      break;
    case "poison":
      typeInteger = 4;
      break;
    case "ground":
      typeInteger = 5;
      break;
    case "rock":
      typeInteger = 6;
      break;
    case "bug":
      typeInteger = 7;
      break;
    case "ghost":
      typeInteger = 8;
      break;
    case "steel":
      typeInteger = 9;
      break;
    case "fire":
      typeInteger = 10;
      break;
    case "water":
      typeInteger = 11;
      break;
    case "grass":
      typeInteger = 12;
      break;
    case "electric":
      typeInteger = 13;
      break;
    case "psychic":
      typeInteger = 14;
      break;
    case "ice":
      typeInteger = 15;
      break;
    case "dragon":
      typeInteger = 16;
      break;
    case "dark":
      typeInteger = 17;
      break;
    case "fairy":
        typeInteger = 18;
        break;
  }
  return typeInteger;
}

async function lookUpType(typeInteger, url) {
    newUrl = url + typeInteger;
    const response = await fetch(newUrl);
    const pokemonList = await response.text();
    pokemonMap = pokemonList
    return pokemonArray
}

function convertPokemon(pokemonList) {
    for (let i = 0; i < length(pokemonMap); i++){
        
    }
    const pokemonNumber = length(pokemonList)
    randomNumber = Math.floor(Math.random() * pokemonNumber) + 1
    randomPokemon = pokemonList[randomNumber].pokemon.name
    return randomPokemon
}

function outputPokemon(pokemon, selector) {
  document.querySelector(selector).innerText = pokemon
}

function clickHandler() {
  const typeInteger = getType();
  const pokemonList = lookUpType(typeInteger, url);
  
  randomPokemon = convertPokemon(pokemonList);
  outputPokemon(randomPokemon, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);