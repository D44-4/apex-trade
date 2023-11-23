import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Markets from './pages/Markets';
import Commodities from './pages/Commodities';
import Indices from './pages/Indices';
import SignUp from './pages/SignUp';
import BitcoinMining from './pages/BitcoinMining';
import Forex from './pages/Forex';
import RetirementPlanning from './pages/RetirementPlanning';
import PreciousMetals from './pages/PreciousMetals';
import Marijuana from './pages/Marijuana';
import RealEstate from './pages/RealEstate';
import CrudeOil from './pages/CrudeOil';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Markets' component={Markets} />
        <Route path='/Commodities' component={Commodities} />
        <Route path='/Indices' component={Indices} />
        <Route path='/SignUp' component={SignUp} />
        <Route path='/BitcoinMining' component={BitcoinMining} />
        <Route path='/Forex' component={Forex} />
        <Route path='/RetirementPlanning' component={RetirementPlanning} />
        <Route path='/PreciousMetals' component={PreciousMetals} />
        <Route path='/Marijuana' component={Marijuana} />
        <Route path='/RealEstate' component={RealEstate} />
        <Route path='/CrudeOil' component={CrudeOil} />
      </Switch>
    </Router>
  );
}

export default App;