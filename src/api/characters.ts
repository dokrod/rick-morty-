import { Character } from "@/types/characters";
import { client } from "@/utils/fetchClient";

export const getCharacters = () => {
  return client.get<Character[]>(`/character`);
};