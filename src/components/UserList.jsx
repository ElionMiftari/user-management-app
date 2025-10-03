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
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

    return (
            <div className="container mt-3">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {filteredUsers.map((user) => (
          <div key={user.id} className="col-md-4">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>

    );
}
