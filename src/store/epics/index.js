export const pingEpic = (action$) =>
  action$.ofType("PING").delay(5000).mapTo({ type: "PONG" });
