import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Lost from "./Pages/Lost";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/lost">
            <Lost />
          </Route>
          <Route path="*">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
