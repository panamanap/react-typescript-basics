import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import TodosPage from './pages/TodosPage';
import UserPage from './pages/UserPage';
import UserItemPage from './pages/UserItemPage';
import AddionalPage from './pages/AddionalPage';

const App = () => {
    return (
        <div>
            <nav style={{ padding: 15, border: '1px solid gray' }}>
                <NavLink
                    style={{ marginRight: 10, textDecoration: 'none' }}
                    to="/users"
                >
                    Пользователи
                </NavLink>
                <NavLink
                    style={{ marginRight: 10, textDecoration: 'none' }}
                    to="/todos"
                >
                    Список дел
                </NavLink>
                <NavLink style={{ textDecoration: 'none' }} to="/additional">
                    События
                </NavLink>
            </nav>
            <Routes>
                <Route path="/users" element={<UserPage />} />
                <Route path="/todos" element={<TodosPage />} />
                <Route path="/additional" element={<AddionalPage />} />
                <Route path="/todos" element={<TodosPage />} />
                <Route path="/users/:id" element={<UserItemPage />} />
            </Routes>
        </div>
    );
};

export default App;
