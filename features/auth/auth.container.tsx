import { FormEvent } from "react";
import { SignInDisplay } from "./auth.display";
import { useDispatch, useSelector } from "react-redux";
import { login, selectIsLoading } from "@/features/auth/auth.slice";
import Link from "next/link";

export function SignInContainer() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    dispatch(login({ email, password }));
  };

  return (
    <>
      <SignInDisplay handleSubmit={handleSubmit} loginLoading={isLoading} />
      <Link href="/" className="hover:underline mt-4">
        Home
      </Link>
    </>
  );
}
