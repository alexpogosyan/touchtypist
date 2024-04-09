"use client";
import { getExerciseById } from "@/exercises";
import Exercise from "@/ui/Exercise/Exercise";

interface Props {
  params: { id: string };
}

export default function ExerciseDetail({ params }: Props) {
  const exercise = getExerciseById(params.id);

  return (
    <main className="flex w-full flex-1 flex-col items-center">
      {exercise ? (
        <Exercise exercise={exercise} />
      ) : (
        <div>Exercise not found</div>
      )}
    </main>
  );
}
