import { Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
