import "rxjs";
import { ofType } from "redux-observable";
import { delay } from "rxjs/operators";
import { mapTo } from "rxjs/operators";

export const pingEpic = (action$) =>
  action$.pipe(ofType("PING"), delay(2000), mapTo({ type: "PONG" }));
