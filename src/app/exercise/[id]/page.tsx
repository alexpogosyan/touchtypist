import Exercise from "@/ui/Exercise/Exercise";

export default async function ExerciseDetail() {
  return (
    <main className="flex w-full flex-1 flex-col items-center">
      <Exercise exercise={data} />
    </main>
  );
}
