import Board from './Board'
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" component={Board} />


      </Switch>

    </Router>


  );
}

export default App;
