import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterForm() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/register/', formData);
      setMessage('Usuário registrado com sucesso!');
    } catch (err) {
      setMessage('Erro ao registrar usuário.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Nome" onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      <input name="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input name="password" type="password" placeholder="Senha" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      <button type="submit">Cadastrar</button>
      <p>{message}</p>
    </form>
  );
}
