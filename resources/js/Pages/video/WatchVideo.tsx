import { Layout } from "@/Layouts/Layout";

import { UserVideo } from "@/types";

interface Props {
	video: UserVideo;
}

export default function WatchVideo({ video }: Props) {
	return (
		<Layout>
			<div>{ video.description }</div>
		</Layout>
	);
}
