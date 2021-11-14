import React from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { IUser } from '../types/types';

const UserItemPage: React.FC = () => {
    const [user, setUser] = React.useState<IUser | null>(null);
    const { id } = useParams();
    const navigate = useNavigate();


    React.useEffect(() => {
        try {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => res.json() as Promise<IUser>)
                .then((json) => setUser(json));
        } catch (e) {
            alert('Ошибка получения пользователей!');
        }
    }, []);
    return <div>
        <button onClick={()=> navigate("/users")}>Back</button>
        <h1>Страница пользователя {id}. {user?.name}</h1>
        <div>{user?.address.city} {user?.address.streat} {user?.address.zipcode}</div>
    </div>;
};

export default UserItemPage;
