import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import React,{useState} from 'react'


function App() {

  return (
    <div className='app'>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
