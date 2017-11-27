import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer.js'
import DevTools from './DevTools.js';

const App = () => {
  return (
    <div className="App">
      <CommentsListContainer/>
      <DevTools />
    </div>
  );
};

export default App;
