import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import "./App.scss";
import ChatsPage from "./pages/chats-page/chats-page.component";
import HomePage from "./pages/homepage/homepage.component";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (currentUser ? <Redirect to="/chats" /> : <HomePage />)}
        />
        <Route
          exact
          path="/chats"
          render={() => (!currentUser ? <Redirect to="/" /> : <ChatsPage />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
