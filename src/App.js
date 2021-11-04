import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/dashboard";
import Main from "./components/auth/Login";
import ResetPassword from "./components/auth/ResetPassword";
import Settings from "./components/dashboard/Settings";
import UserProfile from "./components/dashboard/UserProfile";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/resetPassword" component={ResetPassword} />
          <Route path="/settings" component={Settings} />
          <Route path="/userprofile" component={UserProfile} />
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
