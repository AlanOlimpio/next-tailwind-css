import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | Tailwind CSS",
  description: "Generated by create next app",
};

export default async function Project() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight pt-7">Project</h1>
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {session?.user?.name}
      </div>
    </main>
  );
}