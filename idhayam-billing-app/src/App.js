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

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <CustomBoxes /> */}
        <div>
          <HeaderComponent />
        </div>
        <div>
          <ContainerComponent />
        </div>
      </div>
    </Provider>
  );
}

export default App;
