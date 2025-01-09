"use client";

import { ProjectInterfaceProps } from "@/interfaces/projects";
import { api } from "@/lib/axios";

import { TableBody } from "./ui/table";
import { ProjectTableRow } from "./project-table-row";
import { useEffect, useState } from "react";
export function TableBodyList() {
  const [productList, setProductList] = useState<ProjectInterfaceProps[]>([]);

  async function handleProductsList() {
    const response: ProjectInterfaceProps[] = await api
      .get("/api/projects/")
      .then((response) => response.data);
    setProductList(response);
  }
  useEffect(() => {
    handleProductsList();
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
