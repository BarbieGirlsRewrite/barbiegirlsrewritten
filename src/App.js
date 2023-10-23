import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import Nav from './component/nav';
import { AuthContextProvider } from './context/AuthContext';

class App extends Component {
  render() {
    return (
      <AuthContextProvider>
      <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nav" element={<Nav />} />
      </Routes>
    </Router>
    </AuthContextProvider>
   );
  }
}
  
export default App;
