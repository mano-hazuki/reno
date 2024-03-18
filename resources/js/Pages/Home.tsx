import { Layout } from "@/Layouts/Layout";

import { UserVideoPreview } from "@/Components/UserVideoPreview";

import type { PageProps, UserVideo } from "@/types";

interface Props extends PageProps {
	videos: UserVideo[];
}

export default function Home({ auth, videos }: Props) {
	return (
		<Layout user={auth.user}>
			<main className="w-full h-fit p-4 flex-1 bg-white">
				<h1 className="my-2 font-bold text-2xl">Latest videos</h1>
				<ul className="w-full h-fit my-4 flex flex-col justify-start items-center gap-2">
					{videos.map((video) => (
						<UserVideoPreview video={video} />
					))}
				</ul>
			</main>
		</Layout>
	);
}
