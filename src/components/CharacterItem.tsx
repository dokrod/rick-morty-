import { Character } from "@/types/characters";
import Image from "next/image";
import React from "react";
import cn from "classnames";

interface Props {
  character: Character;
}

const CharacterItem: React.FC<Props> = ({ character }) => {
  return (
    <div className="flex gap-3 items-center border rounded-md p-2 hover:bg-slate-200 transition-colors duration-300">
      <div className="">
        <Image
          src={character.image}
          alt="photo"
          width={130}
          height={130}
          className="rounded-md"
        />
      </div>
      <div>
        <div className="text-2xl">{character.name}</div>
        <div className="flex items-center gap-1">
          <div
            className={cn("h-2 w-2 rounded-full", {
              "bg-green-600": character.status === "Alive",
              "bg-red-600": character.status === "Dead",
              "bg-gray-500": character.status === "unknown",
            })}
          />
          {character.status} - {character.gender}
        </div>
        <div>
          <span className="font-bold">Origin:</span> {character.origin.name}
        </div>
        <div>
          <span className="font-bold">Last known location: </span>
          {character.location.name}
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
