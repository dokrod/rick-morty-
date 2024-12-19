"use client";

import { getCharacters } from "@/api/characters";
import CharacterItem from "@/components/CharacterItem";
import { Character } from "@/types/characters";
import { useEffect, useState } from "react";

function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getCharacters().then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2 mx-[220px] my-7">      
      {characters.map((character) => (
        <CharacterItem character={character} key={character.id} />
      ))}
    </div>
  );
}

export default Characters;
