import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Statistics from './components/Statistics';
function App() {
  const [winners, setWinners] = useState([]);
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/statistics' element={(<Statistics winners={winners} />)} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
