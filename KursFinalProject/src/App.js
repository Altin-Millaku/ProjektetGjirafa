import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom' ;
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import BuisnessPage from './Pages/BuisnessPage';
import ServicesPage from './Pages/ServicesPage';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoginModal from './Components/Modal';


const App = () => {
  return (
    <Router>
      <LoginModal/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/buisness' element={<BuisnessPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;