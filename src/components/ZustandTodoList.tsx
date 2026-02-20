import React, { useState } from 'react';

import { useTodoStore } from '../store/useTodoStore';
import { emojiMap } from '../utils/constants/EmojiMap';

export const ZustandTodoList = () => {
  const [todoText, setTodoText] = useState<string>('');
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const handleAddTodo = () => {
    const mappedText: string = emojiMap[todoText.toLowerCase()] || todoText;
    if (mappedText.trim()) {
      addTodo(mappedText);
      setTodoText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <>
      <em> Made with Zustand</em>
      <h1>Emoji Todo List</h1>
      <input
        type='text'
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder='Add a new todo'
        onKeyDown={handleKeyDown}
      />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => removeTodo(todo.id)}
            style={{ cursor: 'pointer' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
};
