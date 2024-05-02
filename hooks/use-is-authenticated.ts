import { selectAuthenticated } from "@/features/auth/auth.slice";
import { useSelector } from "react-redux";

export const useIsAuthenticated = () => {
  return useSelector(selectAuthenticated);
};
