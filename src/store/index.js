import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { pingBongReducer } from "./reducers";
import { pingEpic } from "./epics";
import "rxjs";

const epicMiddleware = createEpicMiddleware();

const store = createStore(pingBongReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(pingEpic);

export default store;
