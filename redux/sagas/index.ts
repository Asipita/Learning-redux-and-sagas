import { all } from "redux-saga/effects";
import { watchUserSaga } from "./user.saga";

export function* rootSaga() {
  yield all([watchUserSaga()]);
}
