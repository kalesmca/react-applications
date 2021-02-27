// import logo from './logo.svg';
import './App.css';
import ComponentA from './components/ComponentA';
import React from 'react';

export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"kaleeswaran"}>
          <ComponentA />
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
