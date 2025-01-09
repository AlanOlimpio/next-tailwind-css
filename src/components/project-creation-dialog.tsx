"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { addDays, format } from "date-fns";
import { z } from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "./ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import { ErrorMessage } from "@hookform/error-message";
import { Select } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { api } from "@/lib/axios";
import { useSession } from "next-auth/react";

const projectCreationSchema = z
  .object({
    name: z.string().min(3, {
      message: "Isto é obrigatório, deve conter pelo menos 3 caracteres!",
    }),
    authorId: z.string(),
    status: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    description: z.string().min(3, {
      message: "Isto é obrigatório, deve conter pelo menos 3 caracteres!",
    }),
    responsible: z
      .string({
        required_error: "Selecione um e-mail",
      })
      .email(),
  })
  .refine((data) => data.endDate > data.startDate, {
    message: "A data de término não pode ser anterior à data de início.",
    path: ["endDate"],
  });

export type projectCreationSchema = z.infer<typeof projectCreationSchema>;

export function ProjectCreationDialog() {
  const session = useSession();

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm<projectCreationSchema>({
    criteriaMode: "all",
    resolver: zodResolver(projectCreationSchema),
  });

  async function handleCreateProject(data: projectCreationSchema) {
    await api.post("/api/projects/", {
      name: data.name,
      authorId: data.authorId,
      status: data.status,
      startDate: data.endDate,
      endDate: data.endDate,
      description: data.description,
      responsible: data.responsible,
    });
  }

  if (!session) {
    return null;
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo Projeto</DialogTitle>
        <DialogDescription>
          Preencha as informações do projeto.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleCreateProject)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="col-span-1 text-right" htmlFor="name">
              Projeto
            </Label>
            <Input className="col-span-3" id="name" {...register("name")} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="col-span-1 text-right" htmlFor="name">
              Data de início
            </Label>
            <Popover>
              <Controller
                control={control}
                name="startDate"
                render={({ field: { onChange, value } }) => (
                  <>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] max-w-[100%] col-span-3 pl-3 text-left font-normal"
                        )}
                      >
                        {value ? (
                          format(value, "PPP")
                        ) : (
                          <span>Escolha uma data de Início</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={value}
                        onSelect={onChange}
                        disabled={(date) => date < addDays(new Date(), -1)}
                        initialFocus
                      />
                    </PopoverContent>
                  </>
                )}
              />
            </Popover>
          </div>
          <ErrorMessage
            errors={errors}
            name="startDate"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className="text-red-500" key={type}>
                  {message}
                </p>
              ))
            }
          />
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="col-span-1 text-right" htmlFor="name">
              Data de Fim
            </Label>
            <Popover>
              <Controller
                control={control}
                name="endDate"
                render={({ field: { onChange, value } }) => (
                  <>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] max-w-[100%] col-span-3 pl-3 text-left font-normal"
                        )}
                      >
                        {value ? (
                          format(value, "PPP")
                        ) : (
                          <span>Escolha uma data de Fim</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={value}
                        onSelect={onChange}
                        disabled={(date) => date < addDays(new Date(), -1)}
                        initialFocus
                      />
                    </PopoverContent>
                  </>
                )}
              />
            </Popover>
          </div>
          <ErrorMessage
            errors={errors}
            name="endDate"
            render={({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className="text-red-500" key={type}>
                  {message}
                </p>
              ))
            }
          />

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="col-span-1 text-right" htmlFor="name">
              Autor:
            </Label>
            <Controller
              control={control}
              name="responsible"
              render={({ field: { onChange, value } }) => (
                <Select onValueChange={onChange} defaultValue={value}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Selecione um e-mail" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register("description")}
            />
            <Input
              {...register("authorId", {
                value: session.data?.user?.id,
              })}
              type="hidden"
            />
            <Input {...register("status", { value: "active" })} type="hidden" />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant="default" disabled={isSubmitting}>
            Novo Projeto
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
