import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateProfile from './components/create-profile';
import ProfileList from './components/list-profile';
import CreateStudent from './components/create-student';

function App() {
  return (
    <div className="App container">
      
      {/* <CreateProfile></CreateProfile>
      <ProfileList></ProfileList> */}

      <CreateStudent></CreateStudent>
    </div>
  );
}

export default App;
