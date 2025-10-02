import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const filteredUsers = users.filter(
        u => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search by name or email" 
                value={search} 
                onChange={e => setSearch(e.target.value)}
            />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>
                            {user.name} - {user.email} - {user.company.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
