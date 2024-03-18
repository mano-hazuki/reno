import { Layout } from "@/Layouts/Layout";

import { SearchForm } from "@/Components/SearchForm";
import { UserVideoPreview } from "@/Components/UserVideoPreview";

import type { PageProps, UserVideo } from "@/types";

interface Props extends PageProps {
	videos?: UserVideo[];
}

export default function Search({ auth, videos }: Props) {
	return (
		<Layout user={auth.user}>
			<main className="w-full h-fit flex-1 flex flex-col justify-start items-center">
				<SearchForm />
				<section id="search_result" className="w-full h-fit px-4 pb-4">
					<ul className="w-full h-fit flex flex-col justify-start items-center gap-2">
						{videos?.map((video) => (
							<UserVideoPreview video={video} />
						))}
					</ul>
				</section>
			</main>
		</Layout>
	);
}
