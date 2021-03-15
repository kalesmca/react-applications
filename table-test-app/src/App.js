import "./App.css";
import Table from "./components/table";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import MemberList from './components/memberList';
import EventList from './components/eventList';
import Test from './components/test';
import Root from './components/root';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Root />
        {/* <Test /> */}
      </div>
    </Provider>
  );
}

export default App;
