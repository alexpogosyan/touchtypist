import { Keyboard } from "@/types/Keyboard";

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
  [{ code: "", symbols: [" "] }],
];

const typeables =
  " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()_+[]{}|\\,./<>?";

export function isTypeable(key: string) {
  return typeables.includes(key);
}

function requiresShift(symbol: string) {
  // todo: some keys are ok with either left or right shift, like B and ^
  const leftShifted = '^&*()_+YUIOP{}|HJKL:"BNM<>?';
  const rightShifted = "~!@#$%QWERTASDFGZXCV";

  if (leftShifted.includes(symbol)) return "ShiftLeft";
  if (rightShifted.includes(symbol)) return "ShiftRight";
  return false;
}

export function symbolToKey(symbol: string) {
  const key = kb.flat().find((k) => k.symbols?.includes(symbol));
  const shift = requiresShift(symbol);
  return { key, shift };
}
