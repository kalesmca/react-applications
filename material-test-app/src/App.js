import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import LayoutContainer from "./containers/layout/layout-container";
import { Provider } from "react-redux";
import store from "./redux/store";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#00ffff",
      },
      primary:{
        main:"#ff8000"
      }
    },
  });
  return (
    <div>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <LayoutContainer />
          </Router>
        </MuiThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
