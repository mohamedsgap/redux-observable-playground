import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { pinngBongReducer } from "./reducers";
import { pingEpic } from "./epics";

const epicMiddleware = createEpicMiddleware(pingEpic);

const store = createStore(pinngBongReducer, applyMiddleware(epicMiddleware));

export default store;
