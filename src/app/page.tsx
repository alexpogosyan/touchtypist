import Keyboard from "@/ui/keyboard/Keyboard";
import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex-1 flex flex-col gap-6 border-solid w-full items-center">
      <Keyboard />
    </main>
  );
}
