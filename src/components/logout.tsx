"use client";
import { signOut, useSession } from "next-auth/react";

import Image from "next/image";

export function Logout() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }
  return (
    <>
      {" "}
      <button
        className="text-sm font-medium hover:underline underline-offset-4"
        onClick={() => signOut()}
      >
        Sign out
      </button>{" "}
      {session.user?.image && (
        <Image
          src={session.user?.image}
          width={24}
          height={24}
          alt={session.user?.name}
          className="!rounded-full  object-cover object-center"
        />
      )}
    </>
  );
}
