"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { isTypeable } from "@/utils/keyboard";
import TypingArea from "./TypingArea";
import Keyboard from "../kb/Keyboard";
import { ExerciseData } from "@/types/Exercise";
import { useRouter } from "next/navigation";
import { getRandomExerciseId } from "@/exercises";
import styles from "./styles.module.css";

export interface Props {
  exercise: ExerciseData;
}

export default function Exercise({ exercise }: Props) {
  const [pos, setPos] = useState(0);
  const [wrongKey, setWrongKey] = useState<string | null>(null);
  const router = useRouter();
  const complete = pos == exercise.symbols.length;
  const lastSymbol = pos > 0 ? exercise.symbols[pos - 1] : null;
  const nextExercise = `/exercise/${getRandomExerciseId(exercise.id)}`;

  // TODO: extract to a custom hook
  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (complete && e.key === "Enter") {
        router.push(nextExercise);
      }
      if (complete || !isTypeable(e.key)) return;

      if (e.key === exercise.symbols[pos]) {
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
  }, [pos, exercise.symbols, complete, nextExercise, router]);

  return (
    <>
      <div className="mb-8 w-4/5 bg-zinc-100 px-4 py-1 text-center font-mono text-xl tracking-wider">
        {complete ? (
          <div>
            Well done!{" "}
            <Link className="text-blue-600 underline" href={nextExercise}>
              Another one?
            </Link>{" "}
            <span className={styles.returnKey}>⏎</span>
          </div>
        ) : (
          <TypingArea
            symbols={exercise.symbols}
            currentPos={pos}
            wrongKey={wrongKey}
          />
        )}
      </div>
      <div className="w-2/3 lg:w-3/5">
        <Keyboard
          nextSymbol={exercise.symbols[pos]}
          wrongSymbol={wrongKey}
          lastSymbol={lastSymbol}
        />
      </div>
    </>
  );
}
