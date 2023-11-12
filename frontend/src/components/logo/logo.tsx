import Image from "next/image";
import Link from "next/link";

interface LogoProps {
	hideTitle?: boolean;
}

export default function Logo({ hideTitle = false }: LogoProps) {
	return (
		<Link
			href={{
				pathname: "/home",
			}}
			className={"flex items-center gap-2"}
		>
			<Image src={"/logo.png"} alt={"logo"} width={72} height={72} draggable={false} />
			<h1 className={`text-4xl font-bold text-main-color ${hideTitle ? "sm:hidden" : ""}`}>NedoLib</h1>
		</Link>
	);
}
