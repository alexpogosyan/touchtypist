import { ExerciseData } from "./types/Exercise";

export const exercises: ExerciseData[] = [
  {
    id: "1",
    symbols: "hello world.",
  },
  {
    id: "2",
    symbols:
      "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
  },
  {
    id: "3",
    symbols:
      "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
  },
  {
    id: "4",
    symbols:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
  },
  {
    id: "5",
    symbols:
      "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
  },
  {
    id: "6",
    symbols:
      "Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day. You shall begin it serenely and with too high a spirit to be encumbered with your old nonsense.",
  },
  {
    id: "7",
    symbols:
      "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory mentioned, which states that this has already happened.",
  },
  {
    id: "8",
    symbols:
      "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  },
  {
    id: "9",
    symbols:
      "I want to stand as close to the edge as I can without going over. Out on the edge you see all kinds of things you can't see from the center.",
  },
  {
    id: "10",
    symbols:
      "The secret of getting ahead is getting started. The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks, and starting on the first one.",
  },
];

export function getRandomExerciseId(except: string) {
  const valids = exercises.filter((ex) => ex.id !== except);
  const idx = Math.floor(Math.random() * valids.length);
  return valids[idx].id;
}

export function getExerciseById(id: string) {
  return exercises.find((e) => e.id === id);
}
