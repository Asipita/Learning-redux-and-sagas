import { withLayout } from "@/HOCs/with-layout";
import { Heading } from "@/ui/common/heading";

function UserProfile() {
  return (
    <div>
      <Heading>User Profile</Heading>
    </div>
  );
}

export default withLayout(UserProfile);
