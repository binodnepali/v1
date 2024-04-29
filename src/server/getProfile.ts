import { Profile } from "../types/Profile.ts";

export const getProfile = async () => {
  const baseurl = Deno.env.get("BASE_URL") || "http://localhost:8000/api";

  console.log("baseurl", baseurl);

  const response = await fetch(`${baseurl}/profile`);
  return await response.json() as Profile;
};

export type Experience =
  & Awaited<ReturnType<typeof getProfile>>["experiences"][0]
  & {
    nestedExperiences: Experience[];
  };
