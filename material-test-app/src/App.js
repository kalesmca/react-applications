import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutContainer from './containers/layout/layout-container';
function App() {
  return (
    <div>
    <Router>
      <LayoutContainer/>
      </Router>
    </div>
  );
}

export default App;
