import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home.js';
import Saved from './components/Saved.js';
import Search from './components/Search.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />}>Home</Route> 
    <Route path="/saved" element={<Saved />}></Route> 
    <Route path="/search" element={<Search />}></Route> 
    </Routes>

    </>
 
  );
}

export default App;
