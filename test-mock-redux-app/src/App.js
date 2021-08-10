import "./App.css";
// import CreateProduct from "./components/create-product";
// import ProductList from "./components/products-list";
// import { Provider } from "react-redux";
// import store from "./redux/store";

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <CreateProduct />
//         <ProductList />
//       </div>
//     </Provider>
//   );
// }

import React from 'react';
import HeaderContainer from "./components/header-container";
import TestContainer from "./components/test-design";

const App = () =>{
  return(
    
    <div>
    <HeaderContainer />
      {/* <TestContainer /> */}
    </div>
    
    
      
    
  )
}

export default App;

