import { Head } from "@inertiajs/react";

import { UserVideoPreview } from "@/Components/UserVideoPreview";
import { Layout } from "@/Layouts/Layout";
import type { PageProps, UserVideo } from "@/types";

interface Props extends PageProps {
	videos: UserVideo[];
}

export default function Home({ auth, videos }: Props) {
	return (
		<Layout user={auth.user}>
			<Head title="Home" />
			<main className="w-1/2 h-fit p-4 flex-1 bg-zinc-900 flex flex-col justify-start items-center gap-8 lg:gap-16">
				<h1 className="w-full h-fit font-bold text-2xl text-white lg:text-4xl">Latest videos</h1>
				<ul className="w-full h-fit flex flex-col justify-start items-center gap-4 lg:grid lg:grid-cols-3 lg:gap-8">
					{videos.map((video) => (
						<UserVideoPreview video={video} />
					))}
				</ul>
			</main>
		</Layout>
	);
}
