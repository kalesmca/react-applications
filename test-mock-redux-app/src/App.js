import logo from "./logo.svg";
import "./App.css";
import CreateProduct from "./components/create-product";
import ProductList from "./components/products-list";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CreateProduct />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
