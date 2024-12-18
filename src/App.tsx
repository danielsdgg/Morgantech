import React from 'react';
import Home from './components/Home';
import Story from './components/About/Story';
import Team from './components/About/Team';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Frontend from './components/Programs/Frontend';
import Backend from './components/Programs/Backend';
import Cyber from './components/Programs/Cyber';
import Graphics from './components/Programs/Graphics';
import Forms from './components/Forms';
import Accounts from './components/Programs/Accounts';
import VideoEditing from './components/Programs/VideoEditing';
import Computer from './components/Programs/Computer';
import Android from './components/Programs/Android';
import Webdesign from './components/Programs/Webdesign';
import Portal from './components/Portal';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/story' element={<Story/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/frontend' element={<Frontend/>} />
          <Route path='/backend' element={<Backend/>} />
          <Route path='/cyber' element={<Cyber/>} />
          <Route path='/graphics' element={<Graphics/>} />
          <Route path='/accounts' element={<Accounts/>} />
          <Route path='/videoediting' element={<VideoEditing/>} />
          <Route path='/computerpackages' element={<Computer/>} />
          <Route path='/android' element={<Android/>} />
          <Route path='/webdesign' element={<Webdesign/>} />
          <Route path='/portal' element={<Portal/>} />

          <Route path='/form' element={<Forms/>} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
