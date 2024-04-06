import clsx from "clsx";
import styles from "./styles.module.css";

export default function Keyboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.keyboard}>
        <div className={styles.row}>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>~</span>
            <span>`</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>!</span>
            <span>1</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>@</span>
            <span>2</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>#</span>
            <span>3</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>$</span>
            <span>4</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>%</span>
            <span>5</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>^</span>
            <span>6</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>&</span>
            <span>7</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>*</span>
            <span>8</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>(</span>
            <span>9</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>)</span>
            <span>0</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>_</span>
            <span>-</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>+</span>
            <span>=</span>
          </div>
          <div className={clsx(styles.key, styles.del)}>del</div>
        </div>

        <div className={styles.row}>
          <div className={clsx(styles.key, styles.tab)}>tab</div>
          <div className={styles.key} id="q">
            Q
          </div>
          <div className={styles.key}>W</div>
          <div className={styles.key}>E</div>
          <div className={styles.key}>R</div>
          <div className={styles.key}>T</div>
          <div className={styles.key}>Y</div>
          <div className={styles.key}>U</div>
          <div className={styles.key}>I</div>
          <div className={styles.key}>O</div>
          <div className={styles.key}>P</div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>&#123;</span>
            <span>[</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>&#125;</span>
            <span>]</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>|</span>
            <span>\</span>
          </div>
        </div>

        <div className={styles.row}>
          <div className={clsx(styles.key, styles.caps)}>caps</div>
          <div className={styles.key}>A</div>
          <div className={styles.key}>S</div>
          <div className={styles.key}>D</div>
          <div className={styles.key}>F</div>
          <div className={styles.key}>G</div>
          <div className={styles.key}>H</div>
          <div className={styles.key}>J</div>
          <div className={styles.key}>K</div>
          <div className={styles.key}>L</div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>:</span>
            <span>;</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>"</span>
            <span>'</span>
          </div>
          <div className={clsx(styles.key, styles.enter)}>enter</div>
        </div>

        <div className={styles.row}>
          <div className={clsx(styles.key, styles.shift)}>shift</div>
          <div className={styles.key}>Z</div>
          <div className={styles.key}>X</div>
          <div className={styles.key}>C</div>
          <div className={styles.key}>V</div>
          <div className={styles.key}>B</div>
          <div className={styles.key}>N</div>
          <div className={styles.key}>M</div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>&#60;</span>
            <span>,</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>&#62;</span>
            <span>.</span>
          </div>
          <div className={clsx(styles.key, styles.dualLabel)}>
            <span>?</span>
            <span>/</span>
          </div>
          <div className={clsx(styles.key, styles.shift)}>shift</div>
        </div>

        <div className={styles.row}>
          <div className={styles.spacer}></div>
          <div className={clsx(styles.key, styles.space)}>&nbsp;</div>
          <div className={styles.spacer}></div>
        </div>
      </div>
    </div>
  );
}
