import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../../styles/Login.css';  // Asegúrate de tener el archivo CSS en la carpeta correcta

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };
 
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <div className="logo">
        <img src="../assets/images/logo.png" alt="Logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">
            <i className="fas fa-user"></i> Usuario:
          </label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">
            <i className="fas fa-lock"></i> Password:
          </label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">INGRESAR</button>
      </form>
    </div>
  );
};

export default Login;
