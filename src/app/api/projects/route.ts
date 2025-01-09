import { projectCreationSchema } from "@/components/project-creation-dialog";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data: projectCreationSchema = await req.json();

  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
  }

  const newProject = await prisma.project.create({
    data: {
      name: data.name,
      authorId: data.authorId,
      status: data.status,
      startDate: data.endDate,
      endDate: data.endDate,
      description: data.description,
      responsible: data.responsible,
    },
  });

  const projectFormat = JSON.stringify({
    checkoutUrl: newProject,
  });

  return new Response(projectFormat, {
    status: 201,
  });
}
