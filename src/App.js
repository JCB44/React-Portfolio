// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Navbar from './components/navbar';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Footer from './components/footer';
import { Box } from "@chakra-ui/react";
function App() {
  return (
<BrowserRouter> 
<Box w='100%' h='100%' bgGradient='linear(to-r, gray.400, blue.200, blue.200, gray.400)'>
<Navbar/>
  <Routes>
    <Route path="/" element={<About/>} />
    <Route path="/portfolio" element={<Portfolio/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route> 
    <Route path="/resume" element={<Resume/>}></Route>  

  </Routes>

  <Footer/>
  </Box>
</BrowserRouter>
  );
}

export default App;
