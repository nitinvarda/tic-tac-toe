import Board from './Board'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Route path="/" component={Board} />

    </Router>


  );
}

export default App;
