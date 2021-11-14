import React from 'react';

import { IUser } from '../types/types';

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user,onClick }) => {
    return (
        <div
            onClick={() => onClick(user)}
            style={{ padding: 15, border: '1px solid gray',cursor: 'pointer'}}
        >
            {user.id}. {user.name} проживает в городе {user.address.city} на
            улице {user.address.streat}
        </div>
    );
};

export default UserItem;
