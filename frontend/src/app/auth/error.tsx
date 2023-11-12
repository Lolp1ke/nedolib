"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	return (
		<section className={"w-[50%] flex items-center justify-center md:w-full"}>
			<Card className={"flex flex-col gap-4 w-1/2 min-w-[370px]"}>
				<CardHeader>
					<CardTitle>{error.message}</CardTitle>
				</CardHeader>
				<CardFooter>
					<Button type={"button"} variant={"outline"} onClick={reset}>
						Try again
					</Button>
					<Button type={"button"} variant={"link"}>
						<Link
							href={{
								pathname: "/home",
							}}
						>
							Go home
						</Link>
					</Button>
				</CardFooter>
			</Card>
		</section>
	);
}
