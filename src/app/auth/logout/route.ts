import { createClient } from "@/utils/supabase/server";
import { type NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function POST(req: NextRequest) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    await supabase.auth.signOut();
  }
  return redirect("/");
}
