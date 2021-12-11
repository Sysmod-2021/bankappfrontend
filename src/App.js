import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import theme from "./theme";
import AppRouter from "./router";
import GlobalStyle from "./theme/globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <AppRouter />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
