"use client";
import { use } from "react";
import { getExerciseById } from "@/exercises";
import Exercise from "@/ui/Exercise/Exercise";

interface Props {
  params: Promise<{ id: string }>;
}

export default function ExerciseDetail({ params }: Props) {
  const resolvedParams = use(params);
  const exercise = getExerciseById(resolvedParams.id);

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
