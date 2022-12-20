import React from 'react';

import Home from 'pages/home/index'
import SearchResults from 'pages/searchResults/index'

import {Route} from 'wouter'

import './App.css';

function App() {

  return (
    <div className="App">
      <div className="App-header">
      

        <div>
          <Route
            component={Home}
            path='/'
          />
          <Route
            component={SearchResults}
            path='/search/:keyword'
          />
         
        </div>
      </div>
    </div>
  );
}

export default App;
