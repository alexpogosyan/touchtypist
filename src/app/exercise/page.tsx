import { exercises } from "@/exercises";
import Link from "next/link";

export default async function ExerciseList() {
  return (
    <main className="flex w-full flex-1 flex-col items-center">
      <h1>Exercises:</h1>
      <ul>
        {exercises.map((ex) => (
          <li key={ex.id}>
            <Link href={`/exercise/${ex.id}`}>{ex.symbols}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
