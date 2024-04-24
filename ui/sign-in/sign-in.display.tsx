import { Heading } from "../common/heading";

type SignInDisplayProps = {
  email: string;
  password: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    field: "email" | "password"
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SignInDisplay({
  handleSubmit,
  handleChange,
  email,
  password,
}: SignInDisplayProps) {
  return (
    <>
      <Heading>Sign In</Heading>

      <form
        className="flex flex-col gap-4 mt-5 w-[min(100%,_400px)]"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded"
          name="email"
          value={email}
          onChange={handleChange("email")}
          required
        />
        <input
          className="p-2 border border-gray-300 rounded"
          type="password"
          placeholder="*******"
          name="password"
          value={password}
          onChange={handleChange("password")}
          required
        />

        <button
          type="submit"
          className="p-2 border bg-gray-700 rounded text-white"
        >
          Login
        </button>
      </form>
    </>
  );
}
