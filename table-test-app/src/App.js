import "./App.css";
import Table from "./components/table";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import MemberList from './components/memberList';
import EventList from './components/eventList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MemberList />
        <EventList />
      </div>
    </Provider>
  );
}

export default App;
