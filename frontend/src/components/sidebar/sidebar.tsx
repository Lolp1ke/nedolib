import Link from "next/link";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { Book, Bookmark, Menu, User, Users } from "lucide-react";
import { MainConfig } from "@/config/main";

export default function Sidebar() {
	return (
		<Sheet>
			<SheetTrigger className={"absolute right-[5px] top-[5px]"} asChild={true}>
				<Button type={"button"} variant={"outline"}>
					<Menu width={32} height={32} />
				</Button>
			</SheetTrigger>
			<SheetContent className={"flex flex-col"}>
				<SheetHeader>
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<div className={"flex flex-1 flex-col items-start gap-3"}>
					<Button type={"button"} variant={"outline"} className={"w-full"}>
						<Link
							href={{
								pathname: "/home",
							}}
							className={"flex items-center gap-2 w-full justify-start"}
						>
							<p className={"text-3xl tracking-[-6px]"}>ほり</p> Basty bet
						</Link>
					</Button>
					<Button type={"button"} variant={"outline"} className={"w-full"}>
						<Link
							href={{
								pathname: "/titles",
							}}
							className={"flex items-center gap-2 w-full justify-start"}
						>
							<Book /> Shyǵarmalar
						</Link>
					</Button>
					<Button type={"button"} variant={"outline"} className={"w-full"}>
						<Link
							href={{
								pathname: "/authors",
							}}
							className={"flex items-center gap-2 w-full justify-start"}
						>
							<Users /> Avtorlar
						</Link>
					</Button>
					<Button type={"button"} variant={"outline"} className={"w-full"}>
						<Link
							href={{
								pathname: "/profile/list",
							}}
							className={"flex items-center gap-2 w-full justify-start"}
						>
							<Bookmark /> Meniń tizimim
						</Link>
					</Button>
					<Button type={"button"} variant={"outline"} className={"w-full"}>
						<Link
							href={{
								pathname: "/profile",
							}}
							className={"flex items-center gap-2 w-full justify-start"}
						>
							<User /> Profıl
						</Link>
					</Button>
				</div>
				<SheetFooter>
					<SheetDescription>Site version {MainConfig.WEBSITE_VERSION}</SheetDescription>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
