import { Profile } from "../types/Profile.ts";

export const getProfile = async () => {
  const response = await fetch("http://localhost:8000/api/profile");
  return await response.json() as Profile;
};

export type Experience =
  & Awaited<ReturnType<typeof getProfile>>["experiences"][0]
  & {
    nestedExperiences: Experience[];
  };
