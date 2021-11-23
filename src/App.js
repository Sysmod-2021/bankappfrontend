import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './router';
import GlobalStyle from './theme/globalStyles';


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AppRouter />
      </Router>
    </>
  );
}

export default App;
