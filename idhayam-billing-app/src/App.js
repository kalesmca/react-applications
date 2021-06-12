// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import CustomBoxes from "./components/box.test";
import store from "./redux/store";
import { Provider } from "react-redux";

import ContainerComponent from "./components/container";
import HeaderComponent from "./components/header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import OrderSummaryComponent from "./components/order-summary";


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
            <HeaderComponent />
          </div>
      <Switch>
        
        <Route exact exact path= "/" >
            <ContainerComponent />
        </Route>
        <Route exact  path= "/table" >
            <OrderSummaryComponent />
        </Route>
      </Switch>
    </Router>
     
    </Provider>
  );
}

export default App;
