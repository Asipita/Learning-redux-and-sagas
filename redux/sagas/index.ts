import { all } from "redux-saga/effects";
import { watchUserSaga } from "../../features/user-display/user-display.saga";
import { watchAuthSaga } from "@/features/auth/auth.saga";

export function* rootSaga() {
  yield all([watchUserSaga(), watchAuthSaga()]);
}
