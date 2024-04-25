import { Heading } from "@/ui/common/heading";
import Link from "next/link";
import withPublicPage from "@/HOCs/with-public-page";

function Home() {
  return (
    <>
      <Heading>Home Page</Heading>
      <Link href="/sign-in" className="mt-4 hover:underline">
        Login
      </Link>
    </>
  );
}

export default withPublicPage(Home);
