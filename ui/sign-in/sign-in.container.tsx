import { ChangeEvent, useState } from "react";
import { SignInDisplay } from "./sign-in.display";
import { useDispatch } from "react-redux";
import { login } from "@/redux/login.slice";
import Link from "next/link";

export function SignInContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(login());
  };

  const handleChange =
    (field: "email" | "password") => (e: ChangeEvent<HTMLInputElement>) => {
      if (field === "email") {
        setEmail(e.target.value);
      } else {
        setPassword(e.target.value);
      }
    };
  return (
    <>
      <SignInDisplay
        handleSubmit={handleSubmit}
        email={email}
        password={password}
        handleChange={handleChange}
      />
      <Link href="/" className="hover:underline mt-4">
        Home
      </Link>
    </>
  );
}
