import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import Header from './components/header';
import AppContainer from './components/Container';
import Testing from './components/testing';
import store from './Redux/store';
import {Provider} from 'react-redux';
function App() {
  const [userName, setUserName] = useState('')
  const [city, setCity] = useState('') 
  const handleChange = (e) => {
    console.log('e:', e)
  }
  const save = () =>{
    console.log('calling')
  }
  return (
    <Provider store={store}>
      <Testing />
    </Provider>
    
  );
}

export default App;


export const List =  () =>{
  return(
    <div>List trigger

    <table>
      <thead>
        <tr>
          <th>SNo</th>
          <th>Name</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Kalees</td>
          <td>Muhavoor</td>
        </tr>
      </tbody>
    </table>

    </div>
  )
}
