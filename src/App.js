import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accordian />} />
        <Route path="/random-color" element={<RandomColor />} />
        <Route path="/star-rating" element={<StarRating noOfStars={10}/>} />
      </Routes>
    </Router>
  );
}

export default App;
