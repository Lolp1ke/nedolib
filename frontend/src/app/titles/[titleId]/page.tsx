import Layout from "@/components/layout/layout";

interface Props {
	params: {
		titleId: string;
	};
}

export default function page({ params }: Props) {
	return <Layout>Specific title {params.titleId}</Layout>;
}
