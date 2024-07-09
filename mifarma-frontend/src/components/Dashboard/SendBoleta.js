import React, { useState } from 'react';
import '../../styles/SendBoleta.css';

const areaOptions = {
  contabilidad: ['Caribel Osco', 'Jose Perez'],
  proyecto: ['Yeder Laura', 'Alfredo Quesquen'],
  marketing: ['Mariella Lombardi'],
  RRHH: ['Flor Carillo Porras', 'Marcela Quispe Pachas', 'Yaela Moscosa Paredes']
};

const SendBoleta = ({ selectedBoletas }) => {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');
  const [message, setMessage] = useState('');

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
    setSelectedPerson('');
  };

  const handlePersonChange = (event) => {
    setSelectedPerson(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar las boletas
    console.log('Boletas enviadas:', selectedBoletas, selectedArea, selectedPerson, message);
  };

  return (
    <div className="send-boleta-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Boletas a enviar:</label>
          <input 
            type="text" 
            value={selectedBoletas.join(',')} 
            readOnly 
          />
        </div>
        <div className="form-group">
          <label>Selecciona el área:</label>
          <select value={selectedArea} onChange={handleAreaChange}>
            <option value="">Selecciona una área</option>
            {Object.keys(areaOptions).map((area) => (
              <option key={area} value={area}>
                {area.charAt(0).toUpperCase() + area.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Enviar a:</label>
          <select value={selectedPerson} onChange={handlePersonChange} disabled={!selectedArea}>
            <option value="">Selecciona una persona</option>
            {selectedArea &&
              areaOptions[selectedArea].map((person) => (
                <option key={person} value={person}>
                  {person}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label>Mensaje:</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            rows="4" 
          />
        </div>
        <div className="form-group">
          <button type="submit">Enviar</button>
          <button type="button" onClick={() => console.log('Cancelar')}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default SendBoleta;
