import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const useIsAuthenticated = () => {
  return useSelector((state: RootState) => state.auth.authenticated);
};
