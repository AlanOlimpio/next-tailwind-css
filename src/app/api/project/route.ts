import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
  }

  const project = await prisma.project.findUnique({
    where: {
      id: data.id,
    },
  });

  if (!project) {
    return null;
  }
  const projectFormat = JSON.stringify({
    id: project.id,
    name: project.name,
    status: project.status,
    description: project.description,
    startDate: project.description,
    endDate: project.endDate,
    responsible: project.responsible,
    authorId: project.authorId,
  });

  return new Response(projectFormat, {
    status: 200,
  });
}
