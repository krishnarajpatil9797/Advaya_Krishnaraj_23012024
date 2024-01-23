import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  return (
    <Router>
 
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/admin" component={AdminDashboard} />
        {/* Add other routes for teacher and student dashboards */}
    
    </Router>
  );
};

export default App;

