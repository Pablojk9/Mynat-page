import React, { useState } from 'react';
import './usuario.css';
import { useNavigate } from 'react-router-dom';

/*
    notas de desarrollo:
        - se debe de cambiar la ruta de la redirección en la linea de handle event
        - se deven relacionar la ruta con alguna funcionalidad con tal de validar usuario y conraseña
        - se deven incluir la opcion de registro
        - se deven incluir la opcion de recuperar contraseña
        - se deven incluir la opcion de cerrar sesion
        - se deven incluir la opcion de cambiar contraseña (?)
    
    Contexto actual de desarrollo:
        - se esta desarrollando la funcionalidad de inicio de sesion
        - lo de handle event sirve para diriguirse a otra pagina que describe el perfil del usuario
    
*/

// Función simulada de autenticación
const authenticateUser = async (username, password) => {
    // Simula un retraso para la autenticación
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Aquí es donde llamarías a tu API de autenticación
    if (username === 'admin' && password === 'password123') {
        return { success: true };
    } else {
        return { success: false, message: 'Usuario o contraseña incorrectos' };
    }
};

const Usuario = () => {
    const navigate = useNavigate(); // Inicializa navigate con useNavigate
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        // Obtiene los valores de los campos de formulario
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verifica si los campos están vacíos
        if (!username || !password) {
            alert('Por favor, completa todos los campos.');
            setLoading(false);
            return;
        }

        // Verifica la longitud mínima de la contraseña
        if (password.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres.');
            setLoading(false);
            return;
        }

        // Llama a la función de autenticación
        const result = await authenticateUser(username, password);

        if (result.success) {
            // Redirige al usuario a la página de perfil
            navigate('/historial'); // Asegúrate de cambiar '/pagina-de-perfil' por tu ruta específica
            
        } else {
            setError(result.message);
        }

        setLoading(false);
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
                        <button type="submit" className="login-button_insec" disabled={loading}>
                            {loading ? 'Cargando...' : 'Acceder'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Usuario;
