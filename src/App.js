import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationStack from './Component/NavigationStack'; 
import './App.css'; 

function App() {
  return (
    <div className='App'>
      <Router>
        <NavigationStack />
      </Router>
    </div>
  );
}

export default App;
