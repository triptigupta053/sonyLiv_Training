import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import ApiCall from  './Components/ApiCall';
import About from './Components/About';
import Error from './Components/Error';
import Success from './Components/Success';

function App() {
  return (
  <Switch>
    <Route exact path='/' component={ApiCall}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/error' component={Error}/>
    <Route exact path='/success' component={Success}/>
  </Switch>
    // <ApiCall />
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
