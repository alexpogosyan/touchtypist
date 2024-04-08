import clsx from "clsx";
import styles from "./styles.module.css";
import { ExerciseSymbol } from "@/types/Exercise";

interface Props {
  symbols: ExerciseSymbol[];
  currentPos: number;
  wrongKey: string | null;
}

export default function TypingArea({ symbols, currentPos, wrongKey }: Props) {
  return (
    <>
      {symbols.map((s, index) => (
        <span
          key={`${s.symbol}${index}`}
          className={clsx({
            [styles.beforePos]: index < currentPos,
            [styles.atPos]: index === currentPos,
            [styles.afterPos]: index > currentPos,
            [styles.error]: index === currentPos && wrongKey,
          })}
        >
          {s.symbol}
        </span>
      ))}
    </>
  );
}
