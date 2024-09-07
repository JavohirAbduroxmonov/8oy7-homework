import React from "react";
import { useTodo } from "../store/context";
import TodoItem from "./TodoItem";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const { state } = useTodo();
  
  return (
    <div>
      {state.todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
