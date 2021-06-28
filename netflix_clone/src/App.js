import React from 'react';
// import { Counter } from './features/counter/Counter';
import HomeScreen from './screens/HomeScreen.js';
import './App.css';
import LoginScreen from './screens/LoginScreen.js';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
function App() {
  const user=null;
  return (
    <div className="app">

<Router>
  { !user ? (
     <LoginScreen />
    )  : (
  
  <Switch>
    <Route exact path="/">
          <HomeScreen/>
        </Route>
      </Switch>       ) }
      
    </Router>
    
   
    </div>
  );
}

export default App;
