import React, { useState } from 'react';

function TodoList(props) {
    const { todos, handleRemoveItem } = props;
  return (
    <div className="todo-list">
        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id} onClick={() => handleRemoveItem(todo.id)}>{todo.title}</li>
                ))
            }
            
        </ul>
    </div>
  );
}

export default TodoList;
