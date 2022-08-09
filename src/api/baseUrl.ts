import { IRespAPIPokemon } from "../interfaces/pokemon";

export const API_POKEMON = `https://pokeapi.co/api/v2/pokemon`;

export const fetchApiPokemon = async (): Promise<IRespAPIPokemon> =>
  (await fetch(API_POKEMON)).json();
