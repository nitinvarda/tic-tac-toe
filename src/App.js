import Board from './Board'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    // just checking
    <Router>
      <Switch>
        <Route path="/" component={Board} />


      </Switch>

    </Router>


  );
}

export default App;
