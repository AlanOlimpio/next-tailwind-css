import { Login } from "@/components/login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { buildNextAuthOptions } from "../api/auth/[...nextauth]/route";

export async function LoginSignIn() {
  const session = await getServerSession(buildNextAuthOptions);

  if (session) {
    redirect("/home");
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Login />
    </div>
  );
}
