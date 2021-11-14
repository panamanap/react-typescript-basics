import React from 'react';

import { ITodo } from '../types/types';

interface TodoProps {
    todo: ITodo;
}

const TodoItem: React.FC<TodoProps> = ({ todo }) => {
    const [completed, setCompleted] = React.useState(todo.completed);

    const changeHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCompleted(e.target.checked);
    };

    return (
        <div style={{ padding: 15, border: '1px solid gray' }}>
            <label style={{ cursor: 'pointer' }}>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={changeHadler}
                />
                {todo.id}. {todo.title}
            </label>
        </div>
    );
};

export default TodoItem;
