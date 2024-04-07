import Exercise from "@/ui/Exercise/Exercise";

const data = {
  id: "1",
  title: "First exercise",
  symbols: [
    { symbol: "H", key: "h", modifier: "LeftShift" },
    { symbol: "e", key: "e" },
    { symbol: "l", key: "l" },
    { symbol: "l", key: "l" },
    { symbol: "o", key: "o" },
    { symbol: " ", key: "space" },
    { symbol: "w", key: "w" },
    { symbol: "o", key: "o" },
    { symbol: "r", key: "r" },
    { symbol: "l", key: "l" },
    { symbol: "d", key: "d" },
  ],
};

export default async function ExerciseDetail() {
  return (
    <main className="flex-1 flex flex-col w-full items-center">
      <Exercise exercise={data} />
    </main>
  );
}
