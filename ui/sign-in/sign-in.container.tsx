import { ChangeEvent, useState } from "react";
import { SignInDisplay } from "./sign-in.display";

export function SignInContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
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
    <SignInDisplay
      handleSubmit={handleSubmit}
      email={email}
      password={password}
      handleChange={handleChange}
    />
  );
}
