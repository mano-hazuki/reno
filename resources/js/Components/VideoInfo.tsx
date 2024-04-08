import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import type { UserVideo } from "@/types";
import { Icon } from "./Icon";

interface Props {
	video: UserVideo;
}

export function VideoInfo({ video }: Props) {
	const [isExpanding, setExpanding] = useState<boolean>(false);
	return (
		<div className="w-full h-fit">
			<div className="w-full h-fit rounded bg-white bg-opacity-5 flex flex-col justify-start items-center">
				{/* Title, updated time and views */}
				<div className="w-full h-fit px-4 py-2 flex flex-row justify-between items-center">
					<span className="w-fit h-fit flex flex-col items-start">
						<span className="text-lg text-semibold text-white text-opacity-80">{video.title}</span>
						<span className="py-1 text-xs text-normal text-white text-opacity-50">{video.updated_at}</span>
					</span>
					<span className="w-fit h-fit flex flex-row items-center gap-2">
						<Icon className="text-lg text-white text-opacity-60" icon={faHeart} />
						<span className="text-base text-white text-opacity-60">{video.views}</span>
					</span>
				</div>

				{/* Description */}
				<div style={{ maxHeight: isExpanding ? "fit-content" : "4rem" }} className="w-full h-fit px-4 py-2 truncate text-base text-white text-opacity-60">
					{video.description}
				</div>
			</div>
		</div>
	);
}
