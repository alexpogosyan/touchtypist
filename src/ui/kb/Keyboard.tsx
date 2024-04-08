import styles from "./styles.module.css";
import { symbolToKey, kb } from "@/utils/keyboard";
import Key from "./Key";

interface Props {
  nextSymbol: string;
  wrongSymbol?: string;
}

export default function Keyboard({ nextSymbol, wrongSymbol }: Props) {
  const { key: nextKey, shift: nextShift } = symbolToKey(nextSymbol);
  const { key: wrongKey } = symbolToKey(wrongSymbol ?? "");

  return (
    <div className={styles.wrapper}>
      <div className={styles.keyboard}>
        {kb.map((row, index) => (
          <div className={styles.row} key={`row-${index}`}>
            {row.map((k, index) => (
              <Key
                k={k}
                isNext={k.code === nextKey?.code || k.code === nextShift}
                isWrong={k.code === wrongKey?.code}
                key={`key-${index}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
