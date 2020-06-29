import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Experiences from './components/experiences';
import Education from './components/education';
import Skills from './components/skills';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Experiences></Experiences>
      <Education></Education>
      <Skills></Skills>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
