import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import auth from "./security/Auth";
import logout from './components/Logout'
import register from "./components/Register";
import NavigationBar from "./components/NavigationBar";
import ShowAllRecipies from "./components/ShowAllRecipies";
import Login from "./components/Login";
import Auth from "./security/Auth";
import CreateRecipie from "./components/CreateRecipie";
function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ShowAllRecipies}></Route>
            <Route
              path="/Login"
              exact
              component={Auth(Login)}
            ></Route>
            <Route
              path="/Register"
              exact
              component={Auth(register)}
            ></Route>
            <Route
              path="/CreateRecipie"
              exact
              component={Auth(CreateRecipie)}
            ></Route>
            <Route path="/Logout" exact component={logout}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
