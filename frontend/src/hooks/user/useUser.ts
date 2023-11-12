import { Axios } from "@/lib/axios/axios";

import { useCookies } from "@/hooks/cookies/useCookies";

import { type TUser } from "@/hooks/user/types";

export async function useUser() {
	"use server";
	const { get } = useCookies();

	async function getMe(): Promise<TUser | null> {
		return Axios<TUser>({
			url: "/user/get/me",
			method: "GET",
			params: {
				sessionId: get({ name: "sessionId" }),
			},
		})
			.then((response) => response.data)
			.catch(() => null);
	}

	const user: TUser | null = await getMe();

	return {
		user,
	};
}
