import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

import { VideoPlayer } from "@/Components/Player/VideoPlayer";
import { UserInfo } from "@/Components/UserInfo";
import { VideoInfo } from "@/Components/VideoInfo";
import { Layout } from "@/Layouts/Layout";
import { classnames } from "@/Lib/classnames";
import type { RenoVideo } from "@/Lib/video";
import type { PageProps, UserVideo } from "@/types";

interface Props extends PageProps {
	video: UserVideo;
}

export default function WatchVideo({ auth, video }: Props) {
	const [videoData, setVideoData] = useState<RenoVideo.Data | null>(null);
	const [isLoading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<unknown>();

	async function fetchVideoData() {
		try {
			setLoading(true);

			const res = await fetch("/data_new.json");
			const data = (await res.json()) as RenoVideo.Data;
			setVideoData(data);
		} catch (e: unknown) {
			setError(e);
		} finally {
			setLoading(false);
		}
	}
	useEffect(() => {
		fetchVideoData();
	}, []);
	return (
		<Layout user={auth.user}>
			<Head title={`${video.title} - Reno`} />
			<div className={classnames("w-full h-fit flex flex-col justify-start items-center", "lg:w-3/5")}>
				<div className={classnames("w-full h-fit flex flex-col justify-start items-center")}>
					<div className={classnames("w-full h-auto aspect-video")}>
						<VideoPlayer videoData={videoData} />
					</div>
					<div className={classnames("w-full h-fit p-4 flex flex-col items-center gap-2", "lg:px-0 lg:py-4")}>
						<VideoInfo video={video} />
						<UserInfo user={video.user} />
					</div>
				</div>
			</div>
		</Layout>
	);
}
