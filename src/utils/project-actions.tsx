interface Project {
  title: string;
  gitPage: string;
  livePage: string;
  stack: string[];
  spanTwo?: "1 / 3" | "3 / 5";
  details: string;
}

const projects: Project[]= [
  {
    title: "Project Name",
    gitPage: "",
    livePage: "",
    stack: ["react", "nodejs", "express", "mongoDB"],
    spanTwo: "3 / 5",
    details:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  },
  {
    title: "Project Name",
    gitPage: "",
    livePage: "",
    stack: ["react", "nodejs", "express", "mongoDB"],
    spanTwo: "1 / 3",
    details:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  },
  {
    title: "Project Name",
    gitPage: "",
    livePage: "",
    stack: ["react", "nodejs", "express", "mongoDB"],
    spanTwo: "3 / 5",
    details:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  },
  {
    title: "Project Name",
    gitPage: "",
    livePage: "",
    stack: ["react", "nodejs", "express", "mongoDB"],
    details:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  },
  {
    title: "Project Name",
    gitPage: "",
    livePage: "",
    stack: ["react", "nodejs", "express", "mongoDB"],
    details:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  },
  {
    title: "Project Name",
    gitPage: "",
    livePage: "",
    stack: ["react", "nodejs", "express", "mongoDB"],
    details:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  },
  {
    title: "Project Name",
    gitPage: "",
    livePage: "",
    stack: ["react", "nodejs", "express", "mongoDB"],
    details:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
  },
];

export { projects };
