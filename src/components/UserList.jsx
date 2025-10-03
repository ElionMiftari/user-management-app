import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setUsers, deleteUser } from "../redux/usersSlice";
import UserCard from "./UserCard";

export default function UserList() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [sortField, setSortField] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => dispatch(setUsers(data))); 
    }, [dispatch]);

   const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  ) 
  .sort((a, b) => {
      const fieldA = a[sortField].toLowerCase();
      const fieldB = b[sortField].toLowerCase();
      if (fieldA < fieldB) return sortOrder === "asc" ? -1 : 1;
      if (fieldA > fieldB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return (
    <div className="container mt-3">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

       <div className="d-flex mb-3">
        <select
          className="form-select me-2"
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
        <select
          className="form-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="row">
        {filteredUsers.map((user) => (
          <div key={user.id} className="col-md-4">
            <UserCard user={user} onDelete={() => dispatch(deleteUser(user.id))} />
          </div>
        ))}
      </div>
    </div>

    );
}
