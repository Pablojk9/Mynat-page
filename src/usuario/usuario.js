import React, { useState } from 'react';
import './usuario.css';
import { useNavigate } from 'react-router-dom';

const authenticateUser = async (username, password) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (username === 'admin' && password === 'password123') {
        return { success: true };
    } else {
        return { success: false, message: 'Usuario o contraseña incorrectos' };
    }
};

const Usuario = () => {
    const navigate = useNavigate(); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            alert('Por favor, completa todos los campos.');
            setLoading(false);
            return;
        }

        if (password.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres.');
            setLoading(false);
            return;
        }

        const result = await authenticateUser(username, password);

        if (result.success) {
            navigate('/historial'); 
        } else {
            setError(result.message);
        }

        setLoading(false);
    };

    const handleCreateAccount = () => {
        navigate('/CrearUsuario'); // Redirige a la página de crear usuario
    };

    return (
        <section className="usuario">
            <div className="usuario-container">
                <h1 className="usuario-titulo">Inicio de Sesión</h1>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label htmlFor="username" className="form-label">Usuario</label>
                            <input type="text" id="username" name="username" required className="form-input" placeholder="Ingresa tu usuario" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" id="password" name="password" required className="form-input" placeholder="Ingresa tu contraseña" />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="login-button" disabled={loading}>
                            {loading ? 'Cargando...' : 'Acceder'}
                        </button>
                    </form>
                    <button className="create-account-button" onClick={handleCreateAccount}>
                        Crear Cuenta
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Usuario;
