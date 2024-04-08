import Link from "next/link";

const exercises = [
  {
    id: "1",
    title: "First exercise",
  },
];

export default async function ExerciseList() {
  return (
    <main className="flex-1 flex flex-col w-full items-center">
      <h1>Exercises:</h1>
      <ul>
        {exercises.map((ex) => (
          <li key={ex.id}>
            <Link href={`/exercise/${ex.id}`}>{ex.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
