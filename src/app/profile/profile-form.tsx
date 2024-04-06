"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { type User } from "@supabase/supabase-js";
import Avatar from "./avatar";

export default function ProfileForm({ user }: { user: User | null }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`name, avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        console.log(error);
        throw error;
      }

      if (data) {
        setName(data.name);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    avatar_url,
  }: {
    name: string | null;
    avatar_url: string | null;
  }) {
    try {
      setLoading(true);

      const { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        name: name,
        avatar_url,
      });

      if (error) throw error;
    } catch (error) {
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex-1 flex flex-col w-1/2 justify-center gap-2 text-foreground">
      <Avatar
        uid={user?.id ?? null}
        url={avatar_url}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url);
          updateProfile({ name, avatar_url: url });
        }}
      />
      <label className="text-md" htmlFor="email">
        Email
      </label>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        name="email"
        id="email"
        value={user?.email}
        disabled
      />

      <label className="text-md" htmlFor="name">
        Name
      </label>
      <input
        className="rounded-md px-4 py-2 bg-inherit border mb-6"
        type="text"
        id="name"
        name="name"
        value={name || ""}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex justify-between">
        <div>
          <button
            className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
            onClick={() => updateProfile({ name, avatar_url })}
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </button>
        </div>

        <div>
          <form action="/auth/logout" method="post">
            <button
              className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              type="submit"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
