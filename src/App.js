import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.scss';

function App() {
  return (
    <>
         <Router><div>
         <Layout />
    <Routes>
       <Route path="portfolio/" element={<Home />} />
       <Route path="portfolio/about" element={<About />} />
       <Route path="portfolio/contact" element={<Contact />} />
       <Route path="portfolio/portfolio" element={<Portfolio />} />
    </Routes></div>
    </Router>
    </>
  );
}

export default App;
