import Keyboard from "@/ui/kb/Keyboard";
import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex w-full flex-1 flex-col items-center gap-6 border-solid">
      <Keyboard />
    </main>
  );
}
