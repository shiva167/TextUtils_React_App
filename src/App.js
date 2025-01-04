import { useState } from 'react';
import './App.css';
import React from 'react';
import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alerts from './component/Alerts';
import Feedback from './component/Feedback';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const removeClass = () => {
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-danger');
  };

  const toggleMode = (cls) => {
    removeClass();
    document.body.classList.add('bg-' + cls);

    if (mode === 'light' && cls === 'dark') {
      setMode('dark');
      document.body.style.backgroundColor = '#042443';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else if (mode==='dark' && cls === 'light') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    } else if (cls === 'success') {
      showAlert('Success mode has been enabled', 'success');
      document.title = 'TextUtils - Success Mode';
    } else if (cls === 'warning') {
      showAlert('Warning mode has been enabled', 'success');
      document.title = 'TextUtils - Warning Mode';
    } else if (cls === 'primary') {
      showAlert('Primary mode has been enabled', 'success');
      document.title = 'TextUtils - Primary Mode';
    } else if (cls === 'danger') {
      showAlert('Danger mode has been enabled', 'success');
      document.title = 'TextUtils - Danger Mode';
    } else if (cls === 'secondary') {
      showAlert('Secondary mode has been enabled', 'success');
      document.title = 'TextUtils - Secondary Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route
              path="/"
              element={<Textform heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />}
            />
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/feedback" element={<Feedback mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;


