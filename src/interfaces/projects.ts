type Status = "active" | "late" | "completed";
export interface ProjectInterfaceProps {
  id: string;
  name: string;
  status: Status;
}
