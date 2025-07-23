import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Home from './components/Home_page.jsx';
import Alerts from './components/Alerts.jsx';
import Events from './components/Events.jsx';
import MySocieties from './components/My-Societies.jsx';
import SocietiesInfo from './components/Society_info.jsx';
import Discussion from "./components/Discussion";
import EventInfo from './components/Event_info.jsx';
import Election from './components/election.jsx';
import EditActivity from './components/edit_activity.jsx';
import styled from "styled-components";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/events" element={<Events />} />
        <Route path="/my-societies" element={<MySocieties />} />
        <Route path="/societies/:id" element={<SocietiesInfo />} />
        <Route path="/discussion/:id" element={<Discussion />} />
        <Route path="/event_info/:id" element={<EventInfo />} />
        <Route path="/election" element={<Election />} /> {/* Add route for Election */}
        <Route path="/edit-activity/:id" element={<EditActivity />} />
        <Route path="*" element={<div>404: Page Not Found</div>} />

       
        
        </Routes>
    </Router>
  );
};

export default App;