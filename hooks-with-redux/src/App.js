import logo from './logo.svg';
import './App.css';
import List from './components/list';
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <List />      
    </div>
    </Provider>
    
  );
}

export default App;
