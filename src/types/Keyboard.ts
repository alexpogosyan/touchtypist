export interface Key {
  code: string;
  symbols?: string[];
  label?: string;
}

type Row = Key[];

export type Keyboard = Row[];
