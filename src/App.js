import Board from './Board'
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Switch>
        <Route path="/home" component={Board} />
        <Redirect from="/" to="/home" />

      </Switch>

    </Router>


  );
}

export default App;
