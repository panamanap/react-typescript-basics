import React from 'react';

import List from '../components/List';
import TodoItem from '../components/TodoItem';

import { ITodo } from '../types/types';

const TodosPage: React.FC = () => {
    const [todos, setTodos] = React.useState<ITodo[]>([]);

    React.useEffect(() => {
        try {
            fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
                .then((res) => res.json() as Promise<ITodo[]>)
                .then((json) => setTodos(json));
        } catch (e) {
            alert('Ошибка получения списка дел!');
        }
    }, []);

    return (
        <List 
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
        />
    );
};

export default TodosPage;
