import React from 'react';
// import { Counter } from './features/counter/Counter';
import HomeScreen from './screens/HomeScreen.js';
import './App.css';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
function App() {
  return (
    <div className="app">

<Router>
  {   <Switch>

    
        <Route exact path="/">
          <HomeScreen/>
        </Route>
      </Switch>        }
      
    </Router>
    
   
    </div>
  );
}

export default App;
