import React, { useEffect, useState } from "react";
import TodoSection from "./todoSection";

const dummyData = [
  {
    title: "Implement Login Feature",
    description: "Create the login functionality using OAuth2.",
    date: "2024-07-14",
    cardType: "todo",
  },
  {
    title: "Design Landing Page",
    description: "Design the layout and UI components for the landing page.",
    date: "2024-07-12",
    cardType: "inprogress",
  },
  {
    title: "Fix Bug in Payment Module",
    description: "Resolve the issue causing incorrect transaction totals.",
    date: "2024-07-11",
    cardType: "done",
  },
  {
    title: "Setup CI/CD Pipeline",
    description: "Configure the CI/CD pipeline using Jenkins and Docker.",
    date: "2024-07-13",
    cardType: "todo",
  },
  {
    title: "Write Unit Tests for User Module",
    description:
      "Write comprehensive unit tests for the user management module.",
    date: "2024-07-10",
    cardType: "inprogress",
  },
  {
    title: "Update Documentation",
    description: "Update the project documentation to include recent changes.",
    date: "2024-07-09",
    cardType: "done",
  },
  {
    title: "Optimize Database Queries",
    description: "Improve the performance of database queries.",
    date: "2024-07-08",
    cardType: "todo",
  },
  {
    title: "Refactor Authentication Code",
    description: "Clean up and refactor the authentication logic.",
    date: "2024-07-07",
    cardType: "inprogress",
  },
  {
    title: "Conduct User Interviews",
    description: "Interview users to gather feedback on the new feature.",
    date: "2024-07-06",
    cardType: "done",
  },
  {
    title: "Plan Sprint Tasks",
    description: "Plan and assign tasks for the upcoming sprint.",
    date: "2024-07-05",
    cardType: "todo",
  },
];

export default function TodoList() {
  const [todos, setTodos] = useState<{ todo: []; inprogress: []; done: [] }>({
    todo: [],
    inprogress: [],
    done: [],
  });

  useEffect(() => {
    normalizeTodoData();
  }, []);

  const normalizeTodoData = () => {
    const todoDataBasedOnType = {
      todo: [],
      inprogress: [],
      done: [],
    } as any;
    dummyData.forEach((todo) => {
      switch (todo.cardType) {
        case "inprogress":
          todoDataBasedOnType.inprogress.push(todo);
          break;
        case "done":
          todoDataBasedOnType.done.push(todo);
          break;
        default:
          todoDataBasedOnType.todo.push(todo);
          break;
      }
    });
    setTodos(todoDataBasedOnType);
  };
  return <TodoSection todoData={todos} />;
}
