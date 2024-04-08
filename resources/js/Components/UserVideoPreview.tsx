import { faClock, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

import type { UserVideo } from "@/types";
import { Icon } from "./Icon";

interface Props {
	video: UserVideo;
}

export function UserVideoPreview({ video }: Props) {
	return (
		<li key={`${video.user.name} ${video.slug}`} className="relative w-full h-fit rounded bg-white bg-opacity-10">
			<Link href={`${video.user.name}/videos/${video.slug}`}>
				<img src={"/images/login_bg.jpg"} alt="Thumbnail" className="w-full h-auto aspect-video" />
				{/* <div className="w-full h-auto aspect-video bg-gray-600" /> */}

				<div className="w-full h-fit px-4 pt-2 pb-4 rounded-b flex flex-row justify-start items-start gap-4">
					{/* User icon */}
					<Icon icon={faUser} className="p-2 flex-none text-xl text-white text-opacity-60" />

					<div className="w-full h-fit flex-1 overflow-hidden">
						{/* Title */}
						<h2 className="font-medium text-white truncate">{video.title}</h2>

						{/* User's display name */}
						<p className="font-normal text-xs text-white text-opacity-60 truncate">{video.user.display_name}</p>

						<div className="w-fit h-fit pt-2 flex-none flex flex-row justify-start items-center gap-2">
							{/* Favorite icon */}
							<div className="flex flex-row items-center gap-1">
								<Icon icon={faHeart} className="text-lg text-pink-400 text-opacity-80" />
								<span className="text-xs text-white text-opacity-60 truncate">{video.views}</span>
							</div>

							{/* Created at */}
							<div className="flex flex-row items-center gap-1">
								<Icon icon={faClock} className="text-xs text-sky-400 text-opacity-80" />
								<span className="text-xs text-white text-opacity-60 truncate">{video.created_at}</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</li>
	);
}
