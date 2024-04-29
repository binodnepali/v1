import { FreshContext } from "$fresh/server.ts";

import profileData from "../../mock/person-profile-endpoint-response.json" with {
  type: "json",
};

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  return new Response(
    JSON.stringify(profileData),
  );
};
