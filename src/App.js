import './App.css';
import Header from './components/Header';
import Box from '@mui/material/Box';
import * as React from 'react'
import Cards from './cards/index.js';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <Box>
        <Header />
        <Cards />
        <Routes>
        </Routes>
    </Box>
  );
}

export default App;
