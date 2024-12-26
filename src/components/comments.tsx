"use client";
import { useState } from "react";

import { ProjectInterfaceProps } from "@/interfaces/projects";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";

const CommentForm = z.object({
  comment: z.string().min(3, {
    message: "Isto é obrigatório, deve conter pelo menos 3 caracteres!",
  }),
});

type CommentForm = z.infer<typeof CommentForm>;

export function Comments({ project }: { project: ProjectInterfaceProps }) {
  const [commentsList, setCommentsList] = useState(project.comments);
  const {
    register,
    handleSubmit,

    formState: { isSubmitting, errors },
  } = useForm<CommentForm>({
    criteriaMode: "all",
    resolver: zodResolver(CommentForm),
  });
  async function handleCreateNewComment(data: CommentForm) {
    const commentsTemp = commentsList && commentsList[commentsList.length - 1];
    const newCommentsId =
      commentsTemp && commentsTemp?.id ? parseInt(commentsTemp.id) + 1 : 1;
    if (parseInt(project.id)) {
      setCommentsList((prevState) => [
        ...prevState,
        {
          id: `${newCommentsId}`,
          author: "Alan",
          content: data.comment,
          publishedAt: new Date(),
        },
      ]);
    } else {
      setCommentsList([
        ...commentsList,
        {
          id: `${newCommentsId}`,
          author: "Alan",
          content: data.comment,
          publishedAt: new Date(),
        },
      ]);
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <div>
      <form
        className="grid  gap-4 max-sm:grid-cols-1"
        onSubmit={handleSubmit(handleCreateNewComment)}
      >
        <div className="grid w-full gap-1.5">
          <Label
            htmlFor="message"
            className="text-2xl font-bold tracking-tight "
          >
            Deixe seu comentário
          </Label>
          <Textarea
            id="message"
            placeholder="Deixe um comentário"
            rows={5}
            {...register("comment")}
          />
        </div>

        <footer>
          <Button type="submit" disabled={isSubmitting}>
            Publicar
          </Button>
        </footer>
        <ErrorMessage
          errors={errors}
          name="comment"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="text-red-500" key={type}>
                {message}
              </p>
            ))
          }
        />
      </form>

      <div>
        <h3 className="text-2xl font-bold tracking-tight mt-10">Comentários</h3>
        {commentsList.map((item, index) => {
          return (
            <p
              className="mt-5 p-5 bg-gray-200 dark:bg-slate-500   rounded-sm"
              key={`${item.id}-comments-${index}`}
            >
              {item.content}
            </p>
          );
        })}
      </div>
    </div>
  );
}
