
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignIn  from './signin';
import home from './home';

function App() {
  return (
    <Router>
      <switch>
        <Route exact path="/signin" component ={SignIn} />
        <Route exact path="/home" component ={home} />
      </switch>
    </Router>
  );
}

export default App;
