import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home  from './components/Home';
import About from './components/About';
import Jeopardy from './components/Jeopardy';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';


function App() {
  return (
    <>
    <Navbar />
   <Routes>
      <Route path="/" element={<Home />}> </Route> 
      <Route path="/about" element={<About />}></Route> 
      <Route path="/jeopardy" element={<Jeopardy />}></Route> 
      <Route path="*" element={<NoMatch />}></Route>
   </Routes>

    
</>
  );
}

export default App;
