"use client";
import { useEffect, useState } from "react";
import { isTypeable } from "@/utils/keyboard";
import TypingArea from "./TypingArea";
import Keyboard from "../kb/Keyboard";
import { ExerciseData } from "@/types/Exercise";

export interface Props {
  exercise: ExerciseData;
}

export default function Exercise({ exercise }: Props) {
  const [pos, setPos] = useState(0);
  const [wrongKey, setWrongKey] = useState<string | null>(null);

  const text = exercise.symbols.map((s) => s.symbol);

  // todo: extract to a hook
  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      console.log("e", e.code);

      if (!isTypeable(e.key)) return;

      if (e.key === text[pos]) {
        setPos((p) => p + 1);
        setWrongKey(null);
      } else {
        setWrongKey(e.key);
      }
    }
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [pos, text]);

  return (
    <>
      <div className="mb-8 w-4/5 bg-zinc-100 px-4 py-1 text-center font-mono text-2xl tracking-wider">
        <TypingArea
          symbols={exercise.symbols}
          currentPos={pos}
          wrongKey={wrongKey}
        />
      </div>
      <div className="w-2/3">
        <Keyboard nextSymbol={text[pos]} />
      </div>
    </>
  );
}
