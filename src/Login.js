import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Main from './Main';



function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
}

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
        toast.error('Por favor, ingrese su usuario y contraseña');
        return;
    }

    if (password.length < 8) {
        toast.error('La contraseña debe tener al menos 8 caracteres ');
        return;
    }

    // Aquí puedes enviar los datos al servidor o realizar otras acciones necesarias
    toast.success('Cryptomonedas cargadas correctamente');
    setLoggedIn(true);
    setUsername('');
    setPassword('');
};


  return (
    <div>
      {loggedIn ? (
        <Main/>
      ) : (
        <form className='textForm' onSubmit={handleSubmit}>
            <h1>Log-in 🚀</h1>
            <div className='Form' >
                <div className='label1'>
                    <label htmlFor="username">Usuario</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className='label2' >
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button className='buttonForm' type="submit">
                    Ingresar
                </button>
            </div>
        </form>
      )}
    </div>
  );
}



export default Login;