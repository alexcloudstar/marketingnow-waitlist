"use server";

import { createClient } from "@/lib/supabase";

interface WaitlistResult {
  success: boolean;
  message: string;
  count?: number;
}

export async function joinWaitlist(
  email: string
): Promise<WaitlistResult> {
  const trimmed = email.trim().toLowerCase();

  if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const supabase = await createClient();

  // Insert - unique constraint on email handles duplicates
  const { error } = await supabase
    .from("waitlist")
    .insert({ email: trimmed });

  if (error) {
    if (error.code === "23505") {
      // Unique violation
      return { success: false, message: "You're already on the waitlist!" };
    }
    console.error("Supabase insert error:", error);
    return { success: false, message: "Something went wrong. Try again." };
  }

  return {
    success: true,
    message: "You're on the list! We'll be in touch soon.",
  };
}
