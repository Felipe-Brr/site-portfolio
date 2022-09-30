import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height" >
        <Routes>
          <Route exact path='/' element={<Home/>} ></Route>
          <Route exact path='/projects' element={<Projects/>} ></Route>
          <Route exact path='/contact' element={<Contact/>} ></Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
