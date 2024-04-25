import withAuthenticatedPage from "@/HOCs/with-authenticated-page";
import { logout } from "@/redux/login";
import { Heading } from "@/ui/common/heading";
import { useDispatch } from "react-redux";

function UserProfile() {
  const dispatch = useDispatch();
  return (
    <>
      <Heading>User Profile</Heading>

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
