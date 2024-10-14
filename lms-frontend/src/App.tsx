import React from 'react';
import Home from './components/Home';
import Story from './components/About/Story';
import Team from './components/About/Team';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/story' element={<Story/>} />
          <Route path='/team' element={<Team/>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
