import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/SendBoleta.css';

const areaOptions = {
  contabilidad: ['Caribel Osco', 'Jose Perez'],
  proyecto: ['Yeder Laura', 'Alfredo Quesquen'],
  marketing: ['Mariella Lombardi'],
  rrhh: ['Flor Carillo Porras', 'Marcela Quispe Pachas', 'Yaela Moscosa Paredes']
};

const SendBoleta = ({ selectedBoletas }) => {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedPersons, setSelectedPersons] = useState([]);
  const [message, setMessage] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
    setSelectedPersons([]);
  };

  const handlePersonChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedPersons(selectedOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar las boletas
    console.log('Boletas enviadas:', selectedBoletas, selectedArea, selectedPersons, message);
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 2000);
  };

  const handleCancel = () => {
    navigate('/boletas');
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
          <select multiple value={selectedPersons} onChange={handlePersonChange} disabled={!selectedArea}>
            {selectedArea &&
              areaOptions[selectedArea].map((person) => (
                <option key={person} value={person}>
                  {person}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label>Usuarios seleccionados:</label>
          <input 
            type="text" 
            value={selectedPersons.join(', ')} 
            readOnly 
          />
        </div>
        <div className="form-group">
          <label>Mensaje:</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            rows="4" 
          />
        </div>
        <div className="form-group buttons">
          <button type="submit" className="btn btn-primary">Enviar</button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
      {isPopupVisible && (
        <div className="popup">
          <p>Correo enviado</p>
        </div>
      )}
    </div>
  );
};

export default SendBoleta;
