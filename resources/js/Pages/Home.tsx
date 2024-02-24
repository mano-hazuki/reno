import Layout from "@/Layouts/Layout";
import Section from "@/Components/Section";

import { Lecture } from "@/types";

interface Props {
	lectures: Array<Lecture>;
}

export default function Home({ lectures }: Props) {
	return (
		<Layout>
			<main className="w-full h-fit flex-1">
				<Section name="トレンド" lectures={ lectures }/>
			</main>
		</Layout>
	);
}
