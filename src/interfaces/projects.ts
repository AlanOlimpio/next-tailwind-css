type Status = "active" | "late" | "completed";
export interface ProjectInterfaceProps {
  id: string;
  name: string;
  status: Status;
  description?: string;
  startDate: string;
  endDate: string;
  responsible: string;
  associatedTasks?: string;
}
