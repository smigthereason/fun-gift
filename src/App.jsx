// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import CreateCard from './pages/CreateCard';
import SchedulePage from './pages/SchedulePage';
import FeedbackPage from './pages/FeedbackPage';
import Loading from './pages/Loading';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loading" element={<Loading />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Nested routes within Layout */}
        <Route element={<Layout />}>

          <Route path="/create" element={<CreateCard />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Route>

        {/* If user enters an unknown route, send them to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
