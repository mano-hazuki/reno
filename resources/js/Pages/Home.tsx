import Layout from "@/Layouts/Layout";
import Section from "@/Components/Section";

export default function Home() {
	return (
		<Layout>
			<main className="w-full h-fit flex-1">
				<Section name="トレンド" />
			</main>
		</Layout>
	);
}
