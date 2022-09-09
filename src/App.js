
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)

  }

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = "#042743";
    }
    else {
      setMode('light');
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = "white";

    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils App" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/' element={<TextArea mode={mode} showAlert={showAlert} />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
