import './App.css';
import Home from './Components/home';
import NandTable from './Components/nandTable';
function App() {
  return (
    <div className="App">
      <div>
        <NandTable />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
