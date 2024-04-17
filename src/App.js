import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accordian />} />
        <Route path="/random-color" element={<RandomColor />} />
      </Routes>
    </Router>
  );
}

export default App;
