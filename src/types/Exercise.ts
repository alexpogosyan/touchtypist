export interface ExerciseData {
  id: string;
  title: string;
  symbols: ExerciseSymbol[];
}

export interface ExerciseSymbol {
  symbol: string;
  shift?: string;
}
