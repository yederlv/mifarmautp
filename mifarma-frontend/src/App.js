import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import BoletasPage from './pages/BoletasPage';
import SendBoletasPage from './pages/SendBoletasPage';
import NotFoundPage from './pages/NotFoundPage';
import AuthContextProvider from './contexts/AuthContext';

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/boletas" element={<BoletasPage />} />
          <Route path="/send-boletas" element={<SendBoletasPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
