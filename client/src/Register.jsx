import React, { useState } from 'react';

const Register = () => {

  function handleSubmit(e) {
    e.preventDefault();
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <label>Email: </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password: </label>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <label>Confirm Password: </label>
      <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  )
}

export default Register;