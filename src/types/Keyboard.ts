export interface Key {
  code: string;
  symbols?: string[];
  label?: string;
}

export type Keyboard = Key[][];
