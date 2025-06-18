import { getExerciseById } from "@/exercises";
import Exercise from "@/ui/Exercise/Exercise";

export default async function Index() {
  return (
    <main className="flex w-full flex-1 flex-col items-center">
      <Exercise exercise={getExerciseById("1")!} />
    </main>
  );
}
