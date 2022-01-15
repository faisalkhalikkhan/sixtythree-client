import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { Users } from "./reducers/users";
import { Edit } from "./reducers/edit";

const redcures = combineReducers({
  Users,
  Edit,
});

const middlware = [thunk];
const store = createStore(
  redcures,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
