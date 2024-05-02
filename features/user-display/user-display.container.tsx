import { RootState } from "@/redux/store";
import { loadUser } from "@/features/user-display/user-display.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserDisplay } from "./user-display.display";

const selectUser = (state: RootState) => state.user.user;
const selectLoading = (state: RootState) => state.user.loading;
const selectError = (state: RootState) => state.user.error;

export function UserDisplayContainer() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return <UserDisplay user={user} loading={loading} error={error} />;
}
