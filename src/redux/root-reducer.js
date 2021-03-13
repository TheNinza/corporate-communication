import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import chatroomReducer from "./chatrooms/chatroom.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  chatrooms: chatroomReducer,
});

export default rootReducer;
