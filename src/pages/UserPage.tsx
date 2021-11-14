import React from 'react';

import List from '../components/List';
import UserItem from '../components/UserItem';

import { useNavigate } from 'react-router';

import { IUser } from '../types/types';

const UserPage: React.FC = () => {
    const [users, setUsers] = React.useState<IUser[]>([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        try {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((res) => res.json() as Promise<IUser[]>)
                .then((json) => setUsers(json));
        } catch (e) {
            alert('Ошибка получения пользователей!');
        }
    }, []);

    return (
        <List
            items={users}
            renderItem={(user: IUser) => (
                <UserItem
                    onClick={(user) => navigate(`/users/${user.id}`)}
                    user={user}
                    key={user.id}
                />
            )}
        />
    );
};

export default UserPage;
