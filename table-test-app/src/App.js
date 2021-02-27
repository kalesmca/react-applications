import "./App.css";
import Table from "./components/table";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import MemberList from './components/memberList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MemberList />
      </div>
    </Provider>
  );
}

export default App;
