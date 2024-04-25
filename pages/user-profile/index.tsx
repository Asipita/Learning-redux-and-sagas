import withAuthenticatedPage from "@/HOCs/with-authenticated-page";
import { logout } from "@/redux/login.slice";
import { Heading } from "@/ui/common/heading";
import { UserDisplayContainer } from "@/ui/user-profile/user-display.container";
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
