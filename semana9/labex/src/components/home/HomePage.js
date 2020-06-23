import React from 'react';

import { useHistory } from 'react-router-dom'


function HomePage () {
    const history = useHistory()
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
            HOME PAGE
        </h1>
      
      </header>
    </div>
  );
}

export default HomePage;