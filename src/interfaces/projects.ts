import { CommentInterfaceProps } from "./comments";

type Status = "active" | "late" | "completed";

export interface ProjectInterfaceProps {
  id: string;
  name: string;
  status: Status;
  description?: string;
  startDate: Date;
  endDate: Date;
  responsible: string;
  associatedTasks: string[];
  comments: CommentInterfaceProps[];
}
