import logo from './logo.svg';
import './App.css';
import ListContainer from './components/list-container';
import CustomContainer from './components/custom-container';

function App() {
  return (
    <div className="App">
      {/* <ListContainer />  => for Basic Drag and Drop*/} 
      <CustomContainer />     
    </div>
  );
}

export default App;
