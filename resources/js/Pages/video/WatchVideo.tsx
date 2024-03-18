import { Layout } from "@/Layouts/Layout";

import type { PageProps, UserVideo } from "@/types";

interface Props extends PageProps {
	video: UserVideo;
}

export default function WatchVideo({ auth, video }: Props) {
	return (
		<Layout user={auth.user}>
			<div>{video.description}</div>
		</Layout>
	);
}
