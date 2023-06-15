import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import auth from "./security/Auth";
import logout from './components/logout'
import login from "./components/login";
import register from "./components/register";

function App() {
  return (
    <div>
      <Router>
        <SideBar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={showAllRecipies}></Route>
            <Route
              path="/SignIn"
              exact
              component={auth(login)}
            ></Route>
            <Route
              path="/SignUp"
              exact
              component={auth(register)}
            ></Route>
            <Route
              path="/CreateRecipie"
              exact
              component={auth(createRecipie)}
            ></Route>
            <Route path="/logout" exact component={logout}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
