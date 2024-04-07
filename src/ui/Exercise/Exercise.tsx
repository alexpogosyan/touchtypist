"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface Props {
  exercise: ExerciseData;
}

interface ExerciseData {
  id: string;
  title: string;
  symbols: ExerciseSymbol[];
}

interface ExerciseSymbol {
  symbol: string;
  key: string;
  modifier?: string;
}

export default function Exercise(props: Props) {
  const [pos, setPos] = useState(0);
  const [wrongKey, setWrongKey] = useState(false);
  const text = props.exercise.symbols.map((s) => s.symbol);
  console.log("renderin");

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      console.log("key event", e);
      const expected = text[pos];

      if (e.key === "Shift") return;

      if (e.key === expected) {
        setPos((p) => p + 1);
        setWrongKey(false);
      } else {
        setWrongKey(true);
      }
    }
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [pos, text]);

  function getText(symbols: ExerciseSymbol[]) {
    return symbols.map((s, index) => (
      <span
        key={`${s.key}${index}`}
        className={clsx({
          [styles.beforePos]: index < pos,
          [styles.atPos]: index === pos,
          [styles.afterPos]: index > pos,
          [styles.error]: index === pos && wrongKey,
        })}
      >
        {s.symbol}
      </span>
    ));
  }

  return (
    <>
      <div className="text-2xl font-mono tracking-wider bg-zinc-100 px-4 py-1">
        {getText(props.exercise.symbols)}
      </div>
      <div>{pos >= text.length ? "Good job" : ""}</div>
    </>
  );
}
