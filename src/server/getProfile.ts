import { Profile } from "../types/Profile.ts";

export const getProfile = async () => {
  const baseurl = Deno.env.get("BASE_URL") || "http://localhost:8000/api";

  const url = `${baseurl}/profile`;

  console.log(`Fetching data from ${url}`);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return await response.json() as Profile;
};
