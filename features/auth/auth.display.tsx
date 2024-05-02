import { Heading } from "../../ui/common/heading";

type SignInDisplayProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  loginLoading: boolean;
};

export function SignInDisplay({
  handleSubmit,
  loginLoading,
}: SignInDisplayProps) {
  return (
    <>
      <Heading>Sign In</Heading>

      <form className="mt-5 w-[min(100%,_400px)]" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-4" disabled={loginLoading}>
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded"
            name="email"
            required
          />
          <input
            className="p-2 border border-gray-300 rounded"
            type="password"
            placeholder="*******"
            name="password"
            required
          />

          <button
            type="submit"
            className="p-2 border bg-gray-700 rounded text-white"
          >
            {loginLoading ? "Logging in..." : "Login"}
          </button>
        </fieldset>
      </form>
    </>
  );
}
