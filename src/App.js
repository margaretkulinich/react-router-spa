import React from 'react';
import NavComponent from './components/NavComponent/NavComponent';
import './App.css';
import Feed from './components/Feed/Feed';
import Contacts from "./components/Contacts/Contacts";
import Photo from './components/Photo/Photo';
import Main from './components/Main/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ContactProfile from './components/ContactProfile/ContactProfile';

function App() {
  return (
    <Router>
      <NavComponent />
      <div className="routes-container">
        <Routes>
          <Route exact path='/feed' element={<Feed />} />
          <Route exact path='/photo' element={<Photo />} />
          <Route exact path='/contacts' element={<Contacts />} />
          <Route exact path='/contact-profile/:index' element={<ContactProfile />} />
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
