import "./main.scss";
import Dashboard from "./admin";
import Landing from "./frontend";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Landing />
        </Route>
        <Route path="/admin" exact={true}>
          <Redirect to="/admin/overview" />
        </Route>
        <Route path="/admin/:page" exact={true}>
          <Dashboard />
        </Route>
        <Route path="/admin/:page/new" exact={true}>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
