import Link from "next/link";
import Image from "next/image";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Mail } from "lucide-react";

export default function page() {
	return (
		<form className={"w-[50%] flex items-center justify-center md:w-full"}>
			<Card className={"flex flex-col gap-4 w-1/2 min-w-[370px]"}>
				<CardHeader className={"flex flex-col gap-0.5 items-center"}>
					<Link
						href={{
							pathname: "/home",
						}}
						className={"flex items-center gap-2"}
					>
						<Image src={"/logo.png"} alt={"logo"} width={72} height={72} draggable={false} />
						<CardTitle className={"text-4xl font-bold text-main-color"}>NedoLib</CardTitle>
					</Link>
					<CardDescription className={"text-sm whitespace-pre text-center"}>
						Poshtańyzdy qalpyna keltirý{"\n"}siltemesin tekserińiz
					</CardDescription>
				</CardHeader>
				<CardContent className={"flex flex-col gap-4"}>
					<div className={"flex items-center relative"}>
						<Input
							name={"email"}
							id={"email"}
							type={"email"}
							placeholder={"Poshta@mysal.kz"}
							className={"pr-10"}
							autoCorrect={"off"}
							required={true}
						/>
						<Mail className={"absolute right-[10px]"} />
					</div>
				</CardContent>
				<CardFooter className={"w-full flex flex-col gap-2"}>
					<Button type={"submit"} className={"w-full bg-main-color"}>
						Qalpyna keltirý
					</Button>
					<div className={"w-full flex items-center justify-between"}>
						<Button type={"button"} variant={"link"} className={"self-start"}>
							<Link
								href={{
									pathname: "/auth/sign-in",
								}}
							>
								Kirý
							</Link>
						</Button>
						<Button type={"button"} variant={"link"} className={"self-start"}>
							<Link
								href={{
									pathname: "/auth/sign-up",
								}}
							>
								Tirkelý
							</Link>
						</Button>
					</div>
				</CardFooter>
			</Card>
		</form>
	);
}
