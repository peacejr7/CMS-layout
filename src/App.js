import './App.css';
import React,{Component} from 'react';

import Navbar from './components/Navbar.jsx'
import Section1 from './components/Section1.jsx'
import Section2 from './components/Section2.jsx'
import Footer from './components/Footer.jsx'

class App extends Component {
  render(){
    return (
      <div className="App">
     
       <Navbar/>
       <Section1/>
       <Section2/>
       <Footer/>
      </div>
    )
  }
}

export default App;
