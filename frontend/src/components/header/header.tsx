import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Logo from "@/components/logo/Logo";
import Toggle from "@/components/theme/toggle/Toggle";

import { type TUser } from "@/hooks/user/types";

interface HeaderProps {
	user: TUser | null;
}

export default function Header({ user }: HeaderProps) {
	return (
		<header
			className={
				"relative w-full flex items-center gap-6 overflow-hidden py-4 px-8 shadow-gray-300 shadow-sm after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gray-200 sm:px-4"
			}
		>
			<Logo hideTitle={true} />

			<div className={"ml-auto flex items-center gap-4"}>
				<Toggle />
				<Input
					name={"search"}
					id={"search"}
					type={"text"}
					className={"focus-visible:ring-0"}
					autoCorrect={"off"}
					spellCheck={false}
				/>

				<Link
					href={{
						pathname: "/profile",
					}}
					className={"flex items-start gap-1"}
					style={{
						display: user ? "flex" : "none",
					}}
				>
					<Avatar>
						<AvatarImage src={"https://placekitten.com/200/200"} />
						<AvatarFallback className={"uppercase"}>{user?.username.at(0)}</AvatarFallback>
					</Avatar>
					<div className={"max-w-[100px] overflow-hidden sm:hidden"}>
						<p className={"text-md font-semibold whitespace-pre text-ellipsis overflow-hidden"}>
							{user?.username}
						</p>
						<p className={"text-sm whitespace-pre text-ellipsis overflow-hidden"}>{user?.name}</p>
					</div>
				</Link>

				<div
					className={"flex flex-row items-center gap-3"}
					style={{
						display: user ? "none" : "flex",
					}}
				>
					<Button type={"button"} className={"bg-main-color w-[75px] sm:hidden"}>
						<Link
							href={{
								pathname: "/auth/sign-in",
							}}
						>
							Kirý
						</Link>
					</Button>
					<Button type={"button"} variant={"outline"} className={"w-[75px]"}>
						<Link
							href={{
								pathname: "/auth/sign-up",
							}}
						>
							Tirkelý
						</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}
