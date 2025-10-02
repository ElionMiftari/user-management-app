import { useState } from 'react';

export default function UserForm({ addUser }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email) return alert('Name and Email are required');
        addUser({ id: Date.now(), name, email, company: { name: 'Local Company' } });
        setName(''); setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <button type="submit">Add User</button>
        </form>
    );
}

