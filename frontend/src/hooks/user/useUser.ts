import { cookies } from "next/headers";

import { Axios } from "@/lib/axios/axios";

import { MainConfig } from "@/config/main";
import type { TUser } from "@/hooks/user/types";

export async function useUser() {
  "use server";
  async function getMe(): Promise<TUser | null> {
    return Axios<TUser>({
      url: "/user/get/me",
      method: "GET",
      params: {
        sessionId: cookies().get(`${MainConfig.COOKIES_PREFIX}sessionId`)?.value,
      },
    })
      .then((response) => response.data)
      .catch(() => {
        return null;
      });
  }

  const user: TUser | null = await getMe();

  return {
    user,
  };
}
