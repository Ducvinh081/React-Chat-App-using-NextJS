import { getServerSession } from "next-auth/next";

import { authOption } from "@/app/api/auth/[...nextauth]/route";

export default async function getSession() {
  return await getServerSession(authOption);
}
