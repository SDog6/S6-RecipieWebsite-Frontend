import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import auth from "./security/Auth";
import logout from './components/Logout'
import register from "./components/Register";
import NavigationBar from "./components/NavigationBar";
import Auth from "./security/Auth";
import CreateRecipie from "./components/CreateRecipie";
import Login from "./components/login";
import ShowAllRecipies from "./components/ShowAllRecipies";
import ShowSingleRecipie from "./components/ShowSingleRecipie";
function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ShowAllRecipies}></Route>
            {/* <Route path="/ShowRecipie" exact component={ShowRecipie}></Route> */}
            <Route path="/ShowSingleRecipie" exact component={ShowSingleRecipie}></Route>
            <Route
              path="/Login"
              exact
              component={auth(Login)}
            ></Route>
            <Route
              path="/Register"
              exact
              component={auth(register)}
            ></Route>
            <Route
              path="/CreateRecipie"
              exact
              component={auth(CreateRecipie)}
            ></Route>
            <Route path="/Logout" exact component={logout}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
