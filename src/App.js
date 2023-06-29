
import './App.css';
import {Link,Route,Routes} from "react-router-dom";
import SignIn from './signin';
import Home from './home';


function App() {
  return (
    <Routes>
      
        <Route path="/signin" element ={<SignIn/>} />
        <Route  path="/home" element ={<Home/>} />
      
    </Routes>
  );
}

export default App;
