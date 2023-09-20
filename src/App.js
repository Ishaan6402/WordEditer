import './App.css';

import TextForm from './Components/TextForm';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Alert from './Components/Alert';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [modeText, setModeText] = useState({
    color: 'black'
  })

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Is enabled !!! ", "success");
      document.title = 'TextUtils - Dark Mode';
      setModeText({
        color: 'white'
      });
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Is enabled !!! ", "success");
      document.title = 'TextUtils - Light Mode';
      setModeText({
        color: 'black'
      });
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modeText={modeText} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />}>
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
        </Routes>
      </Router>
    </>
  )
}
export default App;
