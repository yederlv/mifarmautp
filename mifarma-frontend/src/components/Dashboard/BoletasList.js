/*import React, { useState } from 'react';
import '../../styles/BoletasList.css';

const BoletasList = () => {
  const [filter, setFilter] = useState('all');
  const [boletas, setBoletas] = useState([
    { codigo: 'B00000000001', tipo: 'RR HH', estado: 'Pendiente', fecha: '27-05-2024', seleccionado: false },
    { codigo: 'B00000000002', tipo: 'Contabilidad', estado: 'Pendiente', fecha: '27-05-2024', seleccionado: false },
    { codigo: 'B00000000003', tipo: 'Contabilidad', estado: 'Enviado', fecha: '27-05-2024', seleccionado: true },
    { codigo: 'B00000000004', tipo: 'Contabilidad', estado: 'Enviado', fecha: '27-05-2024', seleccionado: true },
    { codigo: 'B00000000005', tipo: 'Contabilidad', estado: 'Nuevo', fecha: '28-05-2024', seleccionado: false },
  ]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredBoletas = boletas.filter((boleta) => {
    if (filter === 'all') return true;
    return boleta.estado.toLowerCase() === filter;
  });

  const handleCheckboxChange = (index) => {
    const newBoletas = [...boletas];
    newBoletas[index].seleccionado = !newBoletas[index].seleccionado;
    setBoletas(newBoletas);
  };

  return (
    <div className="boletas-list-container">
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('all')} className={filter === 'all' ? 'active' : ''}>Listar Todos</button>
        <button onClick={() => handleFilterChange('nuevo')} className={filter === 'nuevo' ? 'active' : ''}>Nuevos</button>
        <button onClick={() => handleFilterChange('pendiente')} className={filter === 'pendiente' ? 'active' : ''}>Pendiente</button>
        <button onClick={() => handleFilterChange('enviado')} className={filter === 'enviado' ? 'active' : ''}>Enviado</button>
      </div>
      <table className="boletas-table">
        <thead>
          <tr>
            <th>Codigo de Boleta</th>
            <th>Tipo de Boleta</th>
            <th>Estado</th>
            <th>Fecha Facturado</th>
            <th>Seleccionar</th>
          </tr>
        </thead>
        <tbody>
          {filteredBoletas.map((boleta, index) => (
            <tr key={boleta.codigo}>
              <td>{boleta.codigo}</td>
              <td>{boleta.tipo}</td>
              <td>{boleta.estado}</td>
              <td>{boleta.fecha}</td>
              <td>
                <input 
                  type="checkbox" 
                  checked={boleta.seleccionado} 
                  onChange={() => handleCheckboxChange(index)} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="submit-button">Enviar</button>
    </div>
  );
};

export default BoletasList;*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/BoletasList.css';

const BoletasList = () => {
  const [filter, setFilter] = useState('all');
  const [boletas, setBoletas] = useState([
    { codigo: 'B00000000001', tipo: 'RR HH', estado: 'Pendiente', fecha: '27-05-2024', seleccionado: false },
    { codigo: 'B00000000002', tipo: 'Contabilidad', estado: 'Pendiente', fecha: '27-05-2024', seleccionado: false },
    { codigo: 'B00000000003', tipo: 'Contabilidad', estado: 'Enviado', fecha: '27-05-2024', seleccionado: true },
    { codigo: 'B00000000004', tipo: 'Contabilidad', estado: 'Enviado', fecha: '27-05-2024', seleccionado: true },
    { codigo: 'B00000000005', tipo: 'Contabilidad', estado: 'Nuevo', fecha: '28-05-2024', seleccionado: false },
  ]);
  const navigate = useNavigate();

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredBoletas = boletas.filter((boleta) => {
    if (filter === 'all') return true;
    return boleta.estado.toLowerCase() === filter;
  });

  const handleCheckboxChange = (index) => {
    const newBoletas = [...boletas];
    newBoletas[index].seleccionado = !newBoletas[index].seleccionado;
    setBoletas(newBoletas);
  };

  const handleSendClick = () => {
    const selectedBoletas = boletas.filter(boleta => boleta.seleccionado).map(boleta => boleta.codigo);
    navigate('/send-boletas', { state: { selectedBoletas } });
  };

  return (
    <div className="boletas-list-container">
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('all')} className={filter === 'all' ? 'active' : ''}>Listar Todos</button>
        <button onClick={() => handleFilterChange('nuevo')} className={filter === 'nuevo' ? 'active' : ''}>Nuevos</button>
        <button onClick={() => handleFilterChange('pendiente')} className={filter === 'pendiente' ? 'active' : ''}>Pendiente</button>
        <button onClick={() => handleFilterChange('enviado')} className={filter === 'enviado' ? 'active' : ''}>Enviado</button>
      </div>
      <table className="boletas-table">
        <thead>
          <tr>
            <th>Codigo de Boleta</th>
            <th>Tipo de Boleta</th>
            <th>Estado</th>
            <th>Fecha Facturado</th>
            <th>Seleccionar</th>
          </tr>
        </thead>
        <tbody>
          {filteredBoletas.map((boleta, index) => (
            <tr key={boleta.codigo}>
              <td>{boleta.codigo}</td>
              <td>{boleta.tipo}</td>
              <td>{boleta.estado}</td>
              <td>{boleta.fecha}</td>
              <td>
                <input 
                  type="checkbox" 
                  checked={boleta.seleccionado} 
                  onChange={() => handleCheckboxChange(index)} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="submit-button" onClick={handleSendClick}>Enviar</button>
    </div>
  );
};

export default BoletasList;


