import './App.css';
import React from  'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/HomePage/Home';
import SignUp from './views/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App
