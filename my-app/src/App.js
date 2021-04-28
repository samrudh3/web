
import { BrowserRouter as  Router, Switch , Route} from 'react-router-dom';
import './App.css';
import Home from './pages';



function App() {
  return (
    <Router>
     <Home />
    </Router>
  );
}

export default App;