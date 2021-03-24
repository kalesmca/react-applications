import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import Header from './components/header';
import AppContainer from './components/Container';
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
    // <div className="App">
    //   <div> 
    //   <label>Name :</label>
    //   <input type ="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />

    //   </div>
    //   <div> 
    //   <label>City :</label>
    //   <input type ="text" value={city} onChange={(e)=>{setCity(e.target.value)}} />

    //   </div>
    //   <button onClick={()=>{save()}}>Save</button>
    //   <List />

    // </div>
    <div>
      <Header/>
      <AppContainer />
    </div>
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
