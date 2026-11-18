import React, { useState, useEffect } from 'react';
import { api } from '../server.js'; 

export function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await api.get('/users');

        const usersData = response.data.users || response.data;
        
        setUsers(usersData);
      } catch (err) {
        setError('Não foi possível carregar os usuários.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p>Carregando dados...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.firstName || user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
} 