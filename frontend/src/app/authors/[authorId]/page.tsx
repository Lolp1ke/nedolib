import Layout from "@/components/layout/layout";

interface Props {
	params: {
		authorId: string;
	};
}

export default function page({ params }: Props) {
	return <Layout>{params.authorId}</Layout>;
}
