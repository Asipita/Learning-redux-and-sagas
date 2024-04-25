import { useRouter } from "next/router";

export function useHandleRedirect(destination: `/${string}`) {
  const router = useRouter();
  return () => {
    router.push(destination);
  };
}
