const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export const fetchUser = async () =>
  await (await fetch(`${baseUrl}/users/1`)).json();
