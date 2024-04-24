import { inter } from "@/fonts";
import { SignInContainer } from "@/ui/sign-in/sign-in.container";

export default function SignInPage() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <SignInContainer />
    </div>
  );
}
