import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateProfile from './components/create-profile';
import ProfileList from './components/list-profile';
import CreateStudent from './components/create-student';
import ComponentA from './components/context-test-components/ComponentA';

function App() {
  return (
    <div className="App container">
      
      {/* <CreateProfile></CreateProfile>
      <ProfileList></ProfileList> */}

      {/* <CreateStudent></CreateStudent> */}

      <div>
        Test Functional Context
          <ComponentA />
      </div>
    </div>
  );
}

export default App;
