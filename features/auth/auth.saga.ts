import { createAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";
import { authenticateUser, authSlice } from "./auth.slice";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const login = createAction<{ email: string; password: string }>(
  `${authSlice}/login`
);
function* onLoginSaga(
  action: ReturnType<typeof login>
): Generator<any, void, any> {
  yield call(() => delay(1000));
  yield put(authenticateUser(action));
}

export function* watchAuthSaga() {
  yield takeEvery(login.type, onLoginSaga);
}
