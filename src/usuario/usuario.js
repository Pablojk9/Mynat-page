import React from 'react';
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


const Usuario = () => {
    const navigate = useNavigate(); // Inicializa navigate con useNavigate
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar tu lógica de validación o autenticación


        // Obtiene los valores de los campos de formulario
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verifica si los campos están vacíos
        if (!username || !password) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Verifica la longitud mínima de la contraseña
        if (password.length < 8) {
            alert('La contraseña debe tener al menos 8 caracteres.');
            return;
        }

        // Aquí puedes agregar más validaciones según sea necesario

        // Si todo es correcto, redirige al usuario

        // Si todo es correcto, redirige al usuario
        navigate('paguina web'); // Asegúrate de cambiar '/ruta-destino' por tu ruta específica
    };


    return (
        <section className="usuario">
            <div className="usuario-container">
                <h1 className="usuario-titulo">Inicio de Sesión</h1>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={handleSubmit}> {/* Asegúrate de incluir el manejador aquí */}
                        <div className="form-field">
                            <label htmlFor="username" className="form-label">Usuario</label>
                            <input type="text" id="username" name="username" required className="form-input" placeholder="Ingresa tu usuario" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" id="password" name="password" required className="form-input" placeholder="Ingresa tu contraseña" />
                        </div>
                        <button type="submit" className="login-button_insec">Acceder</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Usuario;