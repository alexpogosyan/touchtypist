import { type Key } from "@/types/Keyboard";
import clsx from "clsx";
import styles from "./styles.module.css";

interface Props {
  k: Key;
  isNext: boolean;
  isWrong: boolean;
}

export default function Key({ k, isNext, isWrong }: Props) {
  return (
    <div
      className={clsx(styles.key, styles[k.code], {
        [styles.dualLabel]: !k?.label && k?.symbols && k?.symbols?.length > 1,
        [styles.next]: isNext,
        [styles.wrong]: isWrong,
      })}
    >
      {k?.label ? (
        <span>{k.label}</span>
      ) : (
        k?.symbols?.map((s) => <span key={s}>{s}</span>)
      )}
    </div>
  );
}
