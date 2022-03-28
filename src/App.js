import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path='/' element={<Textform heading="ENTER THE TEXT BELOW TO ANALYZE" mode={mode} />}></Route>
          <Route path='/About' element={<About mode={mode} />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
