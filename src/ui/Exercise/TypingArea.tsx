import clsx from "clsx";
import styles from "./styles.module.css";

interface Props {
  symbols: string;
  currentPos: number;
  wrongKey: string | null;
}

export default function TypingArea({ symbols, currentPos, wrongKey }: Props) {
  return (
    <>
      {symbols.split("").map((s, index) => (
        <span
          key={`${s}${index}`}
          className={clsx({
            [styles.beforePos]: index < currentPos,
            [styles.atPos]: index === currentPos,
            [styles.afterPos]: index > currentPos,
            [styles.error]: index === currentPos && wrongKey,
          })}
        >
          {s}
        </span>
      ))}
    </>
  );
}
