import { Heading } from "@/ui/common/heading";
import { withLayout } from "@/HOCs/with-layout";

function Home() {
  return <Heading>Home Page</Heading>;
}

export default withLayout(Home);
