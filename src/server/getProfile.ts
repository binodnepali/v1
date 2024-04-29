import { Profile } from "../types/Profile.ts";

const env = Deno.env.toObject();
const baseurl = env.BASE_URL || "http://localhost:8000/api";

export const getProfile = async () => {
  const response = await fetch(`${baseurl}/profile`);
  return await response.json() as Profile;
};

export type Experience =
  & Awaited<ReturnType<typeof getProfile>>["experiences"][0]
  & {
    nestedExperiences: Experience[];
  };
