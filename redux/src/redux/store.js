import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import albumsReducer from "./albums/reducer";
import userReducer from "./user/reducer";
import albumReducer from "./album/reducer";
import usersReducer from "./users/reducer";
import Api from "../api";

export default createStore(
  combineReducers({
    albums: albumsReducer,
    users: usersReducer,
    user: userReducer,
    album: albumReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(Api)))
);
