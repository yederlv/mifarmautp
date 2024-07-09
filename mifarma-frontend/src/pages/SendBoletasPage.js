import React from 'react';
import { useLocation } from 'react-router-dom';
import SendBoleta from '../components/Dashboard/SendBoleta';

const SendBoletasPage = () => {
  const location = useLocation();
  const { selectedBoletas } = location.state || { selectedBoletas: [] };

  return (
    <div>
      <SendBoleta selectedBoletas={selectedBoletas} />
    </div>
  );
};

export default SendBoletasPage;
