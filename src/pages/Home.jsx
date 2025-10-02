import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import { useState } from 'react';

export default function Home() {
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers(prev => [user, ...prev]);
    };

    return (
        <div>
            <UserForm addUser={addUser} />
            <UserList users={users} setUsers={setUsers} />
        </div>
    );
}
