"use client";

import { ProjectInterfaceProps } from "@/interfaces/projects";
import { api } from "@/lib/axios";
import { toast } from "sonner";

import { TableBody } from "./ui/table";
import { ProjectTableRow } from "./project-table-row";
import { useEffect, useState } from "react";
export function TableBodyList() {
  const [productList, setProductList] = useState<ProjectInterfaceProps[]>([]);

  async function getProductsList() {
    const response: ProjectInterfaceProps[] = await api
      .get("/api/projects/")
      .then((response) => response.data);
    setProductList(response);
  }

  async function handleProductsList() {
    try {
      getProductsList();
      toast.success("Projeto criado com sucesso!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Ocorreu um erro ao criar o Projeto!");
      throw new Error("Ocorreu um erro ao criar o Projeto!");
    }
  }
  useEffect(() => {
    getProductsList();
  }, []);

  useEffect(() => {
    const onCustomEvent = () => {
      handleProductsList();
    };

    window.addEventListener("myCustomEvent", onCustomEvent);

    return () => {
      window.removeEventListener("myCustomEvent", onCustomEvent);
    };
  }, []);

  return (
    <TableBody>
      {productList.map((project, i) => {
        return <ProjectTableRow project={project} key={`identifier${i}`} />;
      })}
    </TableBody>
  );
}
