import { Link } from "@inertiajs/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

import { UserVideo } from "@/types";

interface Props {
	video: UserVideo;
}

export function UserVideoPreview({ video }: Props) {
	return (
		<li key={ video.user.name + " " + video.slug } className="relative w-full h-fit drop-shadow-sm">
			<Link href={ `${ video.user.name }/videos/${ video.slug }` }>
				{/*<img src={ "" } alt="Thumbnail" className="w-full h-auto aspect-video"/>*/ }
				<div className="w-full h-auto aspect-video bg-gray-100"></div>
				<div className="w-full h-fit px-4 py-3 flex flex-row justify-start items-start gap-4 bg-white">
					<FontAwesomeIcon icon={ faUser } size={ "xl" } color={ "gray" } className="p-2 flex-none"/>
					<div className="w-full h-fit flex-1 overflow-hidden">
						<h2 className="font-bold text-gray-900 truncate">{ video.title }</h2>
						<p className="font-normal text-xs text-gray-800 truncate">{ video.user.display_name }</p>
						<div className="w-fit h-fit pt-2 flex-none flex flex-row justify-start items-center gap-2">
							<div className="flex flex-row items-center gap-1">
								<FontAwesomeIcon icon={ faHeart } size={ "xs" } color={ "gray" }/>
								<span className="text-xs truncate">{ video.views }</span>
							</div>
							<div className="flex flex-row items-center gap-1">
								<FontAwesomeIcon icon={ faClock } size={ "xs" } color={ "gray" }/>
								<span className="text-xs truncate">{ video.created_at }</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</li>
	);
}
