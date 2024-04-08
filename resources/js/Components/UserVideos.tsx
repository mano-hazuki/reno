import { classnames } from "@/Lib/classnames";
import type { UserWithVideos } from "@/types";
import { VideoPreview } from "./VideoPreview";

interface Props {
	user: UserWithVideos;
}

export function UserVideos({ user }: Props) {
	return (
		<div className="w-full h-fit">
			<menu className={classnames("w-full h-fit flex flex-col justify-start items-center", "lg:grid lg:grid-cols-3 lg:gap-8")}>
				{user.videos.map((video) => (
					<VideoPreview user={user} video={video} />
				))}
			</menu>
		</div>
	);
}
