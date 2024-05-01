import './App.css';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import FormValidation from './form-validation';
// import ImageSlider from './components/image-slider';
import Carousel from './components/image-slider-static';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accordian />} />
        <Route path="/random-color" element={<RandomColor />} />
        <Route path="/star-rating" element={<StarRating noOfStars={10}/>} />
        <Route path="/form-validation" element={<FormValidation/>} />
        {/* <Route path="/image-slider" element={<ImageSlider url = {'https://picsum.photos/v2/list'} page ={'1'} limit = {10}/>} /> */}
        <Route path="/carousel" element={<Carousel/>} />

      </Routes>
    </Router>
  );
}

export default App;
