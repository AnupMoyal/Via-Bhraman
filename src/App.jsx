// App.jsx
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './components/LoginModals/AuthPage';

export default function App() {
  return (
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/Login" element={<AuthPage/>} />
      </Routes>
     </BrowserRouter>
  );
}
