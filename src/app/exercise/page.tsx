import Link from "next/link";

const exercises = [
  {
    id: "1",
    title: "First exercise",
    symbols: [
      { symbol: "H", key: "h", modifier: "LeftShift" },
      { symbol: "e", key: "e" },
      { symbol: "l", key: "l" },
      { symbol: "l", key: "l" },
      { symbol: "o", key: "o" },
    ],
  },
];

export default async function ExerciseList() {
  return (
    <main className="flex-1 flex flex-col w-full items-center">
      <h1>Exercises:</h1>
      <ul>
        {exercises.map((e) => (
          <li>
            <Link href={`/exercise/${e.id}`}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
