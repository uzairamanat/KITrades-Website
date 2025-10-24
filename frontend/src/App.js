import './App.css';
import Navbar from './components/NavBar';
import {CssBaseline, ThemeProvider}  from '@mui/material';
import theme from './theme';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/OurProducts' element={<Products/>} />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
