import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage/mainPage';
import Makers from './page/Makers/makers';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="makers" element={<Makers />} />
    </Routes>
  );
}

export default App;
