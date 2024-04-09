import { getExerciseById } from "@/exercises";
import Exercise from "@/ui/Exercise/Exercise";
import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex w-full flex-1 flex-col items-center">
      <Exercise exercise={getExerciseById("1")!} />
    </main>
  );
}
