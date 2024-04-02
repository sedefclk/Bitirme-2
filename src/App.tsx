import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import MainPage from './page/MainPage';
import MainPageLogin from './page/MainPageLogin';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Index route */}
        <Route path="/" element={<MainPage />} />

        {/* DiÄŸer yollar */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/MainPageLogin" element={<MainPageLogin />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
