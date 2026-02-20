export type Todo = {
  id: number;
  text: string;
};

export type TodoStore = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
};

export type State = {
  todos: Todo[];
};

export type TodosState = Todo[];
