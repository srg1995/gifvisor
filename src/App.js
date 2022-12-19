import React from 'react';
import ListOfGifs from './components/ListOfGifs'

import Home from './pages/Home/index'
import SearchResults from './pages/SearchResults/index'

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
