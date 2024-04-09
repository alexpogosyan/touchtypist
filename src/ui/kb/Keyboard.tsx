import styles from "./styles.module.css";
import { symbolToKeys, kb, getWrongKeys } from "@/utils/keyboard";
import Key from "./Key";

interface Props {
  nextSymbol: string;
  wrongSymbol: string | null;
  lastSymbol: string | null;
}

export default function Keyboard({
  lastSymbol,
  nextSymbol,
  wrongSymbol,
}: Props) {
  const nextKeys = symbolToKeys(nextSymbol, lastSymbol);
  const wrongKeys = getWrongKeys(wrongSymbol);

  return (
    <div className={styles.wrapper}>
      <div className={styles.keyboard}>
        {kb.map((row, index) => (
          <div className={styles.row} key={`row-${index}`}>
            {row.map((k, index) => (
              <Key
                k={k}
                isNext={!!nextKeys.find((nk) => nk.code === k.code)}
                isWrong={
                  !!(
                    wrongKeys.length > 0 &&
                    wrongKeys.find((wk) => wk.code === k.code)
                  )
                }
                key={`key-${index}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
