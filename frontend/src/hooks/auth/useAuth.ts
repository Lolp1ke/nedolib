import { cookies } from "next/headers";

import { Axios } from "@/lib/axios/axios";

import { MainConfig } from "@/config/main";
import type { ILocalSignIn, ILocalSignUp } from "@/hooks/auth/types";

export async function useAuth() {
  "use server";

  async function localSignUp({ username, email, password }: ILocalSignUp) {
    "use server";
    await Axios<string>({
      url: "/auth/local/sign/up",
      method: "POST",
      data: {
        username,
        email,
        password,
      },
    }).then((response) => {
      cookies().set({
        name: `${MainConfig.COOKIES_PREFIX}sessionId`,
        value: response.data,
        path: "/",
      });
    });
  }
  async function localSignIn({ username, password }: ILocalSignIn) {
    "use server";
    await Axios<string>({
      url: "/auth/local/sign/in",
      method: "POST",
      data: {
        username,
        password,
      },
    }).then((response) => {
      cookies().set({
        name: `${MainConfig.COOKIES_PREFIX}sessionId`,
        value: response.data,
        path: "/",
      });
    });
  }

  async function signOut() {
    "use server";
    const sessionId: string | undefined = cookies().get(`${MainConfig.COOKIES_PREFIX}sessionId`)?.value;
    if (!sessionId) return;

    await Axios({
      url: "/auth/sign/out",
      method: "POST",
      data: {
        sessionId,
      },
    });
  }

  return {
    localSignUp,
    localSignIn,
    signOut,
  };
}
