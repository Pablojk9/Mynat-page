import React, { useState } from 'react';
import './Crear_Usuario.css';
const CreateUser = () => {
  const [formData, setFormData] = useState({
    rut: '',
    nombre: '',
    apellidos: '',
    telefono: '+56',
    correo: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const limitarTelefono = (e) => {
    const maxLength = 12;
    const valorInicial = '+56';
    let valor = e.target.value.trim();
    if (!valor.startsWith(valorInicial)) {
      valor = valorInicial;
    }
    if (valor.length > maxLength) {
      valor = valor.slice(0, maxLength);
    }
    setFormData((prevState) => ({
      ...prevState,
      telefono: valor
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { rut, nombre, apellidos, telefono, correo, contraseña } = formData;
    try {
      const response = await fetch('http://localhost:5500/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rut, nombre, apellidos, telefono, correo, contraseña })
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
      alert('Usuario creado exitosamente');
    } catch (error) {
      alert('Error al crear el usuario: ' + error.message);
    }
  };

  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <img src="/img/logo_mynat.svg" style={{ width: 'auto', maxHeight: '80px' }} alt="logo" />
            <p className="subtitle is-4">Crear usuario</p>
            <br />
            <form id="createUserForm" onSubmit={handleSubmit}>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input is-medium"
                    type="text"
                    id="rut"
                    placeholder="Rut"
                    maxLength="12"
                    value={formData.rut}
                    onChange={handleChange}
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-address-card"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input is-medium"
                    id="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user-alt"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input is-medium"
                    id="apellidos"
                    placeholder="Apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user-alt"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <span className="icon is-small is-left">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <input
                    className="input is-medium"
                    type="tel"
                    id="telefono"
                    placeholder="+56"
                    value={formData.telefono}
                    onChange={limitarTelefono}
                  />
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input is-medium"
                    type="email"
                    id="correo"
                    placeholder="Correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                  />
                  <span className="icon is-medium is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input is-medium"
                    type="password"
                    id="contraseña"
                    placeholder="Contraseña"
                    value={formData.contraseña}
                    onChange={handleChange}
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <button type="submit" className="button is-block is-info is-large is-fullwidth">Crear usuario</button><br />
            </form>
          </div>
          <p className="has-text-grey">
            <a href="/public/login.html">Ya tengo una cuenta</a> &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
