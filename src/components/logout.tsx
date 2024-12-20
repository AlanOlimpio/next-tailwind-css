"use client";
import { signOut, useSession } from "next-auth/react";

export function Logout() {
  const { data: session } = useSession();
  if (session) {
    return (
      <button
        className="text-sm font-medium hover:underline underline-offset-4"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    );
  }
  return null;
}
