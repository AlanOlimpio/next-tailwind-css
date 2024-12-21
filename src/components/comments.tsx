"use client";
import { ChangeEvent, FormEvent, useState } from "react";

import { ProjectInterfaceProps } from "@/interfaces/projects";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export function Comments({ project }: { project: ProjectInterfaceProps }) {
  const [commentsList, setCommentsList] = useState(project.comments);
  const [newCommentText, setNewCommentText] = useState("");

  const isNewCommentEmpty = newCommentText.length === 0;

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const commentsTemp = commentsList && commentsList[commentsList.length - 1];
    const newCommentsId =
      commentsTemp && commentsTemp?.id ? parseInt(commentsTemp.id) + 1 : 1;
    if (parseInt(project.id) % 2 !== 0) {
      setCommentsList([
        ...commentsList,
        {
          id: `${newCommentsId}`,
          author: "Alan",
          content: newCommentText,
          publishedAt: new Date(),
        },
      ]);
    } else {
      setCommentsList([
        ...commentsList,
        {
          id: `${newCommentsId}`,
          author: "Alan",
          content: newCommentText,
          publishedAt: new Date(),
        },
      ]);
    }
    setNewCommentText("");
  }

  function handleNewComentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  return (
    <>
      <form
        className="grid  gap-4 max-sm:grid-cols-1"
        onSubmit={(e) => handleCreateNewComment(e)}
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
            name="comment"
            placeholder="Deixe um comentário"
            value={newCommentText}
            onChange={(e) => handleNewComentChange(e)}
            required
            rows={5}
          />
        </div>

        <footer>
          <Button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </Button>
        </footer>
      </form>

      {commentsList.map((item) => {
        return <p key={`${item.id}-comments`}>{item.content}</p>;
      })}
    </>
  );
}
