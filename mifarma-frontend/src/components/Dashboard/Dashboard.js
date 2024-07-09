import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Dashboard.css'; // Asegúrate de tener el archivo CSS en la carpeta correcta

const Dashboard = () => {
  const navigate = useNavigate();

  const handleVentasRealizadas = () => {
    // Lógica para manejar el clic en "Ventas Realizadas"
    console.log('Ventas Realizadas');
  };

  const handleBoletasDelDia = () => {
    // Lógica para manejar el clic en "Boletas de ventas del día"
    console.log('Boletas de ventas del día');
  };

  return (
    <div className="dashboard-container">
      <button className="dashboard-button ventas" onClick={handleVentasRealizadas}>
        Ventas Realizadas
      </button>
      <button className="dashboard-button boletas" onClick={handleBoletasDelDia}>
        Boletas de ventas del día
      </button>
    </div>
  );
};

export default Dashboard;
