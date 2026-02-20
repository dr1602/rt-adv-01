import type React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { type AppDispatch, type RootState } from '../store/store';
import { addTodo, removeTodo } from '../features/todos/todoActions';
import { emojiMap } from '../utils/constants/EmojiMap';

export const TodoList: React.FC = () => {
  const [todoText, setTodoText] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  const handleAddTodo = () => {
    const mappedText = emojiMap[todoText.toLowerCase() ?? todoText];

    if (mappedText.trim()) {
      dispatch(addTodo(mappedText));
      setTodoText('');
    }
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <em> Made with Redux Toolkit</em>
      <h1> Emoji Todo LIst</h1>
      <input
        type='text'
        value={todoText}
        onChange={(e) => setTodoText(e.target.value as string)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleAddTodo();
          }
        }}
        placeholder='Add new todo'
      />

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleRemoveTodo(todo.id)}
            style={{ cursor: 'pointer' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
};
