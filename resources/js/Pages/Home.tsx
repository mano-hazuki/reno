import { Layout } from "@/Layouts/Layout";

import { UserVideoPreview } from "@/Components/UserVideoPreview";

import { User, UserVideo } from "@/types";

interface Props {
	auth: {
		user: User;
	};
	videos: UserVideo[];
}

export default function Home({ auth, videos }: Props) {
	return (
		<Layout user={ auth.user }>
			<main className="w-full h-fit p-4 flex-1">
				<h1 className="my-2 font-bold text-2xl">最新の投稿</h1>
				<ul className="w-full h-fit my-4 flex flex-col justify-start items-center gap-2">
					{ videos.map(video => <UserVideoPreview video={ video }/>) }
				</ul>
			</main>
		</Layout>
	);
}
