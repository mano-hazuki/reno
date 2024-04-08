import { Head } from "@inertiajs/react";

import { SearchForm } from "@/Components/SearchForm";
import { UserVideoPreview } from "@/Components/UserVideoPreview";
import { Layout } from "@/Layouts/Layout";
import { classnames } from "@/Lib/classnames";
import type { PageProps, UserVideo } from "@/types";

interface Props extends PageProps {
	videos?: UserVideo[];
}

export default function Search({ auth, videos }: Props) {
	return (
		<Layout user={auth.user}>
			<Head title="Search" />
			<main className={classnames("w-full h-fit flex-1 flex flex-col justify-start items-center", "lg:w-1/2 lg:gap-8")}>
				<SearchForm />

				<ul className="w-full h-fit flex flex-col justify-start items-center gap-4 lg:grid lg:grid-cols-3 lg:gap-8">
					{videos?.map((video) => (
						<UserVideoPreview video={video} />
					))}
				</ul>
			</main>
		</Layout>
	);
}
