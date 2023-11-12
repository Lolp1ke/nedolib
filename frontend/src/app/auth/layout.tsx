import { type ReactNode } from "react";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image";

import { useUser } from "@/hooks/user/useUser";

export default async function layout({ children }: { children: ReactNode }) {
	const { user } = await useUser();
	if (user) return redirect("/home", RedirectType.push);

	return (
		<main className={"flex flex-1 relative"}>
			{children}
			<div
				className={
					"w-[50%] z-[-1] relative md:absolute md:left-0 md:top-0 md:h-full md:w-full before:absolute before:w-full before:h-full before:bg-gray-500 before:z-[1] before:opacity-[0.4]"
				}
			>
				<Image src="/images/auth/bg.jpeg" alt="bg" className={"object-cover"} fill={true} draggable={false} />
			</div>
		</main>
	);
}
