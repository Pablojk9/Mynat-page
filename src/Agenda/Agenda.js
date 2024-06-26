import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Agenda.css';

const Agenda = () => {
    const navigate = useNavigate();

    const goToAgenda = () => {
        navigate('/Agenda');
    };

    const goToHistorial = () => {
        navigate('/Historial');
    };

    const appointments = [
        { id: 1, time: '08:00 AM', description: 'Reunión con el equipo de desarrollo' },
        { id: 2, time: '10:00 AM', description: 'Llamada con el cliente' },
        { id: 3, time: '01:00 PM', description: 'Almuerzo con el equipo de marketing' },
        { id: 4, time: '03:00 PM', description: 'Revisión del proyecto' },
        { id: 5, time: '05:00 PM', description: 'Preparación de informes' },
    ];

    return (
        <section className="agenda">
            <div className="view-icons-lateral">
                <div className="icon" onClick={goToAgenda}>📅 Agenda</div>
                <div className="icon" onClick={goToHistorial}>📊 Historial</div>
            </div>
            <div className="agenda-container">
                <h1 className="agenda-titulo">Agenda</h1>
                <table className="agenda-table">
                    <thead>
                        <tr>
                            <th>Hora</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(appointment => (
                            <tr key={appointment.id}>
                                <td>{appointment.time}</td>
                                <td>{appointment.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Agenda;
