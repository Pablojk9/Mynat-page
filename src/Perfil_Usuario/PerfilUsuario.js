import React from 'react';
import './PerfilUsuario.css';

const PerfilUsuario = () => {
    const handleEdit = (event) => {
        event.preventDefault();
        alert('Funcionalidad de editar aún no implementada.');
    };

    return (
        <section className="usuario">
            <div className="usuario-container">
                <h1 className="usuario-titulo">Perfil</h1>
                <img src="https://via.placeholder.com/100" alt="Perfil" className="profile-image" />
                <div className="profile-name">Helena Hills</div>
                <div className="form-container">
                    <div className="form-field">
                        <label htmlFor="username" className="form-label">Nombre de usuario:</label>
                        <input type="text" id="username" name="username" value="@username123" className="form-input" disabled />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" id="email" name="email" value="email@domain.com" className="form-input" disabled />
                    </div>
                    <div className="form-field">
                        <label htmlFor="phone" className="form-label">Número de teléfono:</label>
                        <input type="tel" id="phone" name="phone" value="+569-------" className="form-input" disabled />
                    </div>
                    <div className="form-field">
                        <label htmlFor="address" className="form-label">Dirección:</label>
                        <input type="text" id="address" name="address" value="AV-siempre viva---------" className="form-input" disabled />
                    </div>
                    <button className="edit-button" onClick={handleEdit}>Editar</button>
                </div>
            </div>
        </section>
    );
};

export default PerfilUsuario;
