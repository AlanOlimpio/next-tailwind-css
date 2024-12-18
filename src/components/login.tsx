"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export function Login() {
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
  return (
    <button
      className="text-sm font-medium hover:underline underline-offset-4"
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
    >
      Sign in
    </button>
  );
}
