import { call, put, takeEvery } from "redux-saga/effects";
import { loadUser, loadUserSuccess, loadUserError } from "./user-display.slice";
import { fetchUser } from "@/api/lib";
import { UserType } from "@/schema/types";

function* onLoadUserSaga(): Generator<any, void, any> {
  try {
    const user: UserType = yield call(fetchUser);
    yield put(loadUserSuccess(user));
  } catch (e) {
    yield put(loadUserError());
  }
}

export function* watchUserSaga() {
  yield takeEvery(loadUser().type, onLoadUserSaga);
}
