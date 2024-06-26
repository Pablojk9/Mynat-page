import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Historial.css';

const Historial = () => {
    const data = [
        { id: 1, tecnico: 'Antonio Gutierrez', servicio: 'Instalacion', fecha: '5 Abril 2024' },
        { id: 2, tecnico: 'Miguel Rojas', servicio: 'Mantenimiento', fecha: '14 Mayo 2024' },
        { id: 3, tecnico: 'Miguel Rojas', servicio: 'Mantenimiento', fecha: '14 Junio 2024' },
        { id: 4, tecnico: 'Miguel Rojas', servicio: 'Mantenimiento', fecha: '14 Julio 2024' },
        { id: 5, tecnico: 'Miguel Rojas', servicio: 'Mantenimiento', fecha: '14 Agosto 2024' },
        { id: 6, tecnico: 'Miguel Rojas', servicio: 'Mantenimiento', fecha: '14 Septiembre 2024' },
        { id: 7, tecnico: 'Miguel Rojas', servicio: 'Mantenimiento', fecha: '14 Octubre 2024' },
    ];

    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();

    const toggleMenu = (id) => {
        if (selectedItem === id) {
            setSelectedItem(null);
        } else {
            setSelectedItem(id);
        }
    };

    const goToAgenda = () => {
        navigate('/Agenda');
    };

    const goToHistorial = () => {
        navigate('/Historial');
    };

    return (
        <section className="historial">
            <div className="view-icons-lateral">
                <div className="icon" onClick={goToAgenda}>📅 Agenda</div>
                <div className="icon" onClick={goToHistorial}>📊 Historial</div>
            </div>
            <div className="historial-container">
                <h1 className="historial-titulo">Historial</h1>
                <div className="search-filter-container">
                    <input type="text" className="search-input" placeholder="Buscar..." />
                    <button className="filter-button">Filtro</button>
                </div>
                <table className="historial-table">
                    <thead >
                        <tr>
                            <th>N° Trabajo</th>
                            <th>Técnico</th>
                            <th>Servicio</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <React.Fragment key={item.id}>
                                <tr className="menu-desplegable" onClick={() => toggleMenu(item.id)}>
                                    <td>{item.id}</td>
                                    <td>{item.tecnico}</td>
                                    <td>
                                        <span className={`service-badge ${item.servicio.toLowerCase()}`}>
                                            {item.servicio}
                                        </span>
                                    </td>
                                    <td>{item.fecha}</td>
                                </tr>
                                {selectedItem === item.id && (
                                    <tr className="dropdown-row">
                                        <td colSpan="4">
                                            <div className="dropdown-menu">
                                                <p><strong>Técnico:</strong> {item.tecnico}</p>
                                                <p><strong>Servicio:</strong> {item.servicio}</p>
                                                <p><strong>Fecha:</strong> {item.fecha}</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Historial;
