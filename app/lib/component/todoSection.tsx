import React, { useState } from "react";
import { Card } from "./card";

interface ColumnsProps {
  columnName: string;
  columnData: any[];
}

interface TodoSectionProps {
  todoData: {
    todo: [];
    inprogress: [];
    done: [];
  };
}

export default function TodoSection(props: TodoSectionProps) {
  return (
    <div className="flex flex-wrap justify-center h-screen">
      <Columns columnName="To-Do" columnData={props.todoData.todo} />
      <Columns columnName="Progress" columnData={props.todoData.inprogress} />
      <Columns columnName="Done" columnData={props.todoData.done} />
    </div>
  );
}

const Columns = (props: ColumnsProps) => {
  return (
    <div
      className="w-full md:w-1/3 xl:w-1/3 p-6"
      style={{
        backgroundColor:
          props.columnName === "Progress" ? "#eec76b20" : "inherit",
      }}
    >
      <h2 className="text-2xl font-bold mb-4 text-slate-800">
        {props.columnName}
      </h2>
      <div className="h-[calc(100vh-64px)] overflow-y-auto">
        {props.columnData.map((todo) => (
          <Card
            title={todo.title}
            description={todo.description}
            cardType={todo.cardType}
            date={todo.date}
          />
        ))}
      </div>
    </div>
  );
};
