import { FreshContext } from "$fresh/server.ts";

import profileData from "../../data/linkedin-profile.json" with {
  type: "json",
};

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  return new Response(
    JSON.stringify(profileData),
  );
};
