import React from 'react';
import Navbar from './components/Navbar';
// import { Marquee } from './components/Marquee';
import Carousel from './components/Carousel';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Commodities from './pages/Commodities';
import Indices from './pages/Indices';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import BitcoinMining from './pages/BitcoinMining';
import Forex from './pages/Forex';
import RetirementPlanning from './pages/RetirementPlanning';
import PreciousMetals from './pages/PreciousMetals';
import Marijuana from './pages/Marijuana';
import RealEstate from './pages/RealEstate';
import CrudeOil from './pages/CrudeOil';
import { Footer } from './components/Footer';



function App() {
  return (
    <Router>
      <Navbar />
      {/* <Marquee text=""/> */}
      <br></br>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Commodities' element={<Commodities />} />
        <Route path='/Indices' element={<Indices />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/BitcoinMining' element={<BitcoinMining />} />
        <Route path='/Forex' element={<Forex />} />
        <Route path='/RetirementPlanning' element={<RetirementPlanning />} />
        <Route path='/PreciousMetals' element={<PreciousMetals />} />
        <Route path='/Marijuana' element={<Marijuana />} />
        <Route path='/RealEstate' element={<RealEstate />} />
        <Route path='/CrudeOil' element={<CrudeOil />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;