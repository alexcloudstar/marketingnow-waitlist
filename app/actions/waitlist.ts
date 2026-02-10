"use server";

import { readFile, writeFile } from "fs/promises";
import path from "path";

interface WaitlistEntry {
  email: string;
  timestamp: string;
  source: string;
}

interface WaitlistResult {
  success: boolean;
  message: string;
  count?: number;
}

const DATA_PATH = path.join(process.cwd(), "data", "waitlist.json");

async function getEntries(): Promise<WaitlistEntry[]> {
  try {
    const raw = await readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function joinWaitlist(
  email: string,
  source: string = "hero"
): Promise<WaitlistResult> {
  const trimmed = email.trim().toLowerCase();

  if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  const entries = await getEntries();

  if (entries.some((e) => e.email === trimmed)) {
    return {
      success: false,
      message: "You're already on the waitlist!",
      count: entries.length,
    };
  }

  entries.push({
    email: trimmed,
    timestamp: new Date().toISOString(),
    source,
  });

  await writeFile(DATA_PATH, JSON.stringify(entries, null, 2));

  return {
    success: true,
    message: "You're on the list! We'll be in touch soon.",
    count: entries.length,
  };
}
