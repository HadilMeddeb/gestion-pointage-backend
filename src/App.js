import {  Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute';
import history from './history';
import LoginScreen from './components/screens/LoginScreen/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen/RegisterScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen/ResetPasswordScreen';
import EmployeeRegisterScreen from './components/screens/RegisterScreen/EmployeeRegisterScreen'
import Dashboard from './components/screens/Dashboard/Dashboard';
import "./App.css";
import Landing from './components/screens/landingScreen/landingScreen';
const App = () => {
  return (

    <Router history={history}>
      <div className="App">
        <Switch>
          <PrivateRoute  path="/dashboard" component={Dashboard} />
          <Route exact
            path="/"
            component={Landing} />

          <Route exact
            path="/login"
            component={LoginScreen} />

          <Route exact
            path="/registerscreen"
            component={RegisterScreen} />

          <Route exact
            path="/forgotpasswordscreen"
            component={ForgotPasswordScreen} />

          <Route exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen} />
        </Switch>
      </div>
    </Router >
  );
}
export default App;
