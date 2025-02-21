import { ProjectInterfaceProps } from "@/interfaces/projects";

export const projects: ProjectInterfaceProps[] = [
  {
    id: "1",
    name: "next-tailwind-css",
    status: "active",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum ante. Cras eu odio nulla. Pellentesque ut accumsan turpis. Etiam eros ligula, dictum vitae pellentesque ac, sagittis quis libero.",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Alan Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [],
  },
  {
    id: "2",
    name: "pizzashop-web",
    status: "completed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum ante. Cras eu odio nulla. Pellentesque ut accumsan turpis. Etiam eros ligula, dictum vitae pellentesque ac, sagittis quis libero.",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Murillo Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [
      {
        author: "Alan",
        id: "20",
        content: "Não consegui entregar no prazo.",
        publishedAt: new Date("2024-11-05"),
      },
    ],
  },
  {
    id: "3",
    name: "sapience",
    status: "late",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum ante. Cras eu odio nulla. Pellentesque ut accumsan turpis. Etiam eros ligula, dictum vitae pellentesque ac, sagittis quis libero.",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Alan Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [],
  },
  {
    id: "4",
    name: "hooks",
    status: "late",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum ante. Cras eu odio nulla. Pellentesque ut accumsan turpis. Etiam eros ligula, dictum vitae pellentesque ac, sagittis quis libero.",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Murillo Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [],
  },
  {
    id: "5",
    name: "visual-studio-code",
    status: "completed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum ante. Cras eu odio nulla. Pellentesque ut accumsan turpis. Etiam eros ligula, dictum vitae pellentesque ac, sagittis quis libero.",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Alan Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [],
  },
  {
    id: "6",
    name: "netflix-docker",
    status: "active",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum ante. Cras eu odio nulla. Pellentesque ut accumsan turpis. Etiam eros ligula, dictum vitae pellentesque ac, sagittis quis libero.",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Murillo Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [],
  },
  {
    id: "7",
    name: "exercicios-javascript",
    status: "active",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum ante. Cras eu odio nulla. Pellentesque ut accumsan turpis. Etiam eros ligula, dictum vitae pellentesque ac, sagittis quis libero.",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Alan Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [],
  },
  {
    id: "8",
    name: "coffee-delivery",
    status: "late",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum ante. Cras eu odio nulla. Pellentesque ut accumsan turpis. Etiam eros ligula, dictum vitae pellentesque ac, sagittis quis libero.",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Murillo Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [],
  },
  {
    id: "9",
    name: "ignite-feed",
    status: "late",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum ante. Cras eu odio nulla. Pellentesque ut accumsan turpis. Etiam eros ligula, dictum vitae pellentesque ac, sagittis quis libero.",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Alan Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [],
  },
  {
    id: "10",
    name: "dt-money",
    status: "active",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Murillo Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [],
  },
  {
    id: "11",
    name: "gostack-desafio-conceitos-do-react-native",
    status: "completed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum ante. Cras eu odio nulla. Pellentesque ut accumsan turpis. Etiam eros ligula, dictum vitae pellentesque ac, sagittis quis libero.",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Alan Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [],
  },
  {
    id: "12",
    name: "ignite-shop",
    status: "late",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum ante. Cras eu odio nulla. Pellentesque ut accumsan turpis. Etiam eros ligula, dictum vitae pellentesque ac, sagittis quis libero.",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Murillo Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [],
  },
  {
    id: "13",
    name: "react-leaflet-with-hooks",
    status: "active",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum ante. Cras eu odio nulla. Pellentesque ut accumsan turpis. Etiam eros ligula, dictum vitae pellentesque ac, sagittis quis libero.",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Murillo Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [],
  },
  {
    id: "14",
    name: "webpack-module-federation",
    status: "completed",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum ante. Cras eu odio nulla. Pellentesque ut accumsan turpis. Etiam eros ligula, dictum vitae pellentesque ac, sagittis quis libero.",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Alan Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [],
  },
  {
    id: "15",
    name: "ignite-timer",
    status: "active",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed rutrum ante. Cras eu odio nulla. Pellentesque ut accumsan turpis. Etiam eros ligula, dictum vitae pellentesque ac, sagittis quis libero.",
    startDate: new Date("2024-11-05"),
    endDate: new Date("2024-11-10"),
    responsible: "Murillo Olimpio",
    associatedTasks: ["Criar testes"],
    comments: [],
  },
];
