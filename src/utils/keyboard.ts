import { Key, Keyboard } from "@/types/Keyboard";

export const kb: Keyboard = [
  [
    { code: "Backquote", symbols: ["`", "~"] },
    { code: "Digit1", symbols: ["1", "!"] },
    { code: "Digit2", symbols: ["2", "@"] },
    { code: "Digit3", symbols: ["3", "#"] },
    { code: "Digit4", symbols: ["4", "$"] },
    { code: "Digit5", symbols: ["5", "%"] },
    { code: "Digit6", symbols: ["6", "^"] },
    { code: "Digit7", symbols: ["7", "&"] },
    { code: "Digit8", symbols: ["8", "*"] },
    { code: "Digit8", symbols: ["9", "("] },
    { code: "Digit0", symbols: ["0", ")"] },
    { code: "Minus", symbols: ["-", "_"] },
    { code: "Equal", symbols: ["=", "+"] },
    { code: "Delete", label: "Del" },
  ],

  [
    { code: "Tab", label: "Tab" },
    { code: "KeyQ", symbols: ["q", "Q"], label: "Q" },
    { code: "KeyW", symbols: ["w", "W"], label: "W" },
    { code: "KeyE", symbols: ["e", "E"], label: "E" },
    { code: "KeyR", symbols: ["r", "R"], label: "R" },
    { code: "KeyT", symbols: ["t", "T"], label: "T" },
    { code: "KeyY", symbols: ["y", "Y"], label: "Y" },
    { code: "KeyU", symbols: ["u", "U"], label: "U" },
    { code: "KeyI", symbols: ["i", "I"], label: "I" },
    { code: "KeyO", symbols: ["o", "O"], label: "O" },
    { code: "KeyP", symbols: ["p", "P"], label: "P" },
    { code: "BracketLeft", symbols: ["[", "{"] },
    { code: "BracketRight", symbols: ["]", "}"] },
    { code: "Backslash", symbols: ["\\", "|"] },
  ],
  [
    { code: "CapsLock", label: "Caps" },
    { code: "KeyA", symbols: ["a", "A"], label: "A" },
    { code: "KeyS", symbols: ["s", "S"], label: "S" },
    { code: "KeyD", symbols: ["d", "D"], label: "D" },
    { code: "KeyF", symbols: ["f", "F"], label: "F" },
    { code: "KeyG", symbols: ["g", "G"], label: "G" },
    { code: "KeyH", symbols: ["h", "H"], label: "H" },
    { code: "KeyJ", symbols: ["j", "J"], label: "J" },
    { code: "KeyK", symbols: ["k", "K"], label: "K" },
    { code: "KeyL", symbols: ["l", "L"], label: "L" },
    { code: "Semicolon", symbols: [";", ":"] },
    { code: "Quote", symbols: ["'", '"'] },
    { code: "Enter", label: "Enter" },
  ],
  [
    { code: "ShiftLeft", label: "Shift" },
    { code: "KeyZ", symbols: ["z", "Z"], label: "Z" },
    { code: "KeyX", symbols: ["x", "X"], label: "X" },
    { code: "KeyC", symbols: ["c", "C"], label: "C" },
    { code: "KeyV", symbols: ["v", "V"], label: "V" },
    { code: "KeyB", symbols: ["b", "B"], label: "B" },
    { code: "KeyN", symbols: ["n", "N"], label: "N" },
    { code: "KeyM", symbols: ["m", "M"], label: "M" },
    { code: "Comma", symbols: [",", "<"] },
    { code: "Period", symbols: [".", ">"] },
    { code: "Slash", symbols: ["/", "?"] },
    { code: "ShiftRight", label: "Shift" },
  ],
  [
    { code: "SpaceLeft", symbols: [" "] },
    { code: "SpaceRight", symbols: [" "] },
  ],
];

function getKeyByCode(code: string): Key {
  return kb.flat().find((k) => k.code === code)!;
}

function getKeyBySymbol(symbol: string | undefined | null): Key | undefined {
  if (symbol) return kb.flat().find((k) => k.symbols?.includes(symbol));
}

const typeables =
  " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()_+[]{}|\\;:'\",./<>?";

export function isTypeable(key: string) {
  return typeables.includes(key);
}

function requiredShift(symbol: string) {
  const leftShifted = '^&*()_+YUIOP{}|HJKL:"NM<>?';
  const rightShifted = "~!@#$%QWERTASDFGZXCVB";

  if (leftShifted.includes(symbol)) return getKeyByCode("ShiftLeft");
  if (rightShifted.includes(symbol)) return getKeyByCode("ShiftRight");
  return null;
}

const bothSpaces = [getKeyByCode("SpaceLeft"), getKeyByCode("SpaceRight")];

export function getWrongKeys(symbol: string | null): Key[] {
  let keys: Key[] = [];
  if (symbol == " ") {
    return bothSpaces;
  }

  let key = getKeyBySymbol(symbol);
  if (key) keys.push(key);

  return keys;
}

export function getNextSpace(preceding: string | null): Key[] {
  const leftHandKeys = "`12345qwertasdfgzxcv";
  const rightHandKeys = "7890-=yuiop[]\\hjkl;'nm,./";

  if (!preceding) return bothSpaces;

  return leftHandKeys.includes(preceding)
    ? [getKeyByCode("SpaceRight")]
    : rightHandKeys.includes(preceding)
      ? [getKeyByCode("SpaceLeft")]
      : bothSpaces;
}

export function symbolToKeys(symbol: string, preceding: string | null): Key[] {
  if (symbol === " ") {
    return getNextSpace(preceding);
  }

  const key = getKeyBySymbol(symbol);
  const shift = requiredShift(symbol);

  let keys: Key[] = [];
  if (key) keys.push(key);
  if (shift) keys.push(shift);

  return keys;
}
