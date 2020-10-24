import React from 'react';
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Home from "./components/Home"
import ProtectedRoute from "./ProtectedRoute"
import {AuthProvider} from "./context/Authcontext"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    
      <Router>
        
        <Switch> 
        <AuthProvider>    
        <ProtectedRoute exact path="/" component={Home}/>
        <Route path="/Login" component={Login}/>
      <Route path="/sign-up" >
        <SignUp></SignUp>
      </Route>
      </AuthProvider>
      </Switch>
      </Router>
      

    
  );
}

export default App;
