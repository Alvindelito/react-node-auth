import React, { useState } from 'react';

const Login = () => {
  function handleSubmit(e) {
    e.preventDefault();
    setEmail('');
    setPassword('');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form onSubmit={handleSubmit}>
      <h1>Log in</h1>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login;