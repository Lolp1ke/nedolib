import { Axios } from "@/lib/axios/axios";

import { useCookies } from "@/hooks/cookies/useCookies";

import type { ILocalSignIn, ILocalSignUp } from "@/hooks/auth/types";

export function useAuth() {
	const { create, get } = useCookies();

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
			create({
				name: "sessionId",
				value: response.data,
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
			create({
				name: "sessionId",
				value: response.data,
			});
		});
	}

	async function signOut() {
		"use server";
		const sessionId: string | undefined = get({ name: "sessionId" });
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
