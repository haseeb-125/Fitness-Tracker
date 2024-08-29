import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ThemeSelector from './ThemeSelector';
import Home from './components/home';

const App = () => {
  const [Theme, setTheme] = useState('light-theme');
  useEffect(() => {
    console.log('Applying theme:', Theme); // Debug: Log the theme
    document.body.className = Theme; // Apply theme class to body
  }, [Theme]);
  return (
  <>
  <Routes>
    <Route path='/' element={<ThemeSelector setTheme={setTheme}/>} />
    <Route path='/home' element={<Home/>} />
  </Routes>
  </>
  );
};

export default App;
