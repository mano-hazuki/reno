import { Head } from "@inertiajs/react";

import { UserInfo } from "@/Components/UserInfo";
import { UserVideos } from "@/Components/UserVideos";
import { Layout } from "@/Layouts/Layout";
import { classnames } from "@/Lib/classnames";
import type { PageProps, UserWithVideos } from "@/types";

interface Props extends PageProps {
	user: UserWithVideos;
}

export default function UserDetails({ auth, user }: Props) {
	return (
		<Layout user={auth.user}>
			<Head title={`${user.display_name} - Reno`} />
			<main className={classnames("w-full h-fit p-4 flex flex-col justify-start items-center gap-4", "lg:w-1/2")}>
				<UserInfo user={user} />
				<UserVideos user={user} />
			</main>
		</Layout>
	);
}
