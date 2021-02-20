import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import { auth } from "./firebase/firebase.utils";
import ChatsPage from "./pages/chats-page/chats-page.component";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  const [user, setUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (user ? <Redirect to="/chats" /> : <HomePage />)}
        />
        <Route
          exact
          path="/chats"
          render={() =>
            !user ? <Redirect to="/" /> : <ChatsPage user={user} />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
