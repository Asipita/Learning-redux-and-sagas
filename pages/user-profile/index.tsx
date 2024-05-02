import withAuthenticatedPage from "@/HOCs/with-authenticated-page";
import { logout } from "@/features/auth/auth.slice";
import { Heading } from "@/ui/common/heading";
import { UserDisplayContainer } from "@/features/user-display/user-display.container";
import { useDispatch } from "react-redux";

function UserProfile() {
  const dispatch = useDispatch();
  return (
    <>
      <Heading>User Profile</Heading>
      <UserDisplayContainer />
      <button
        className="p-2 border bg-gray-700 rounded text-white mt-4 w-20"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </>
  );
}

export default withAuthenticatedPage(UserProfile);
