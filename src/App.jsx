import React from 'react';
import { UserList } from './components/UserList.jsx';

export function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Listagem de Usuários</h1>
      <br/>
      <UserList />
    </div>
  );
}

export default App;