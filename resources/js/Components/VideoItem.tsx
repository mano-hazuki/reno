import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

import { Lecture } from "@/types";

interface Props {
	lecture: Lecture;
}

export default function VideoItem({ lecture }: Props) {
	return (
		<li className="w-full h-fit">
			<a href="/videos/">
				{/*<img src={ "" } alt="Thumbnail" className="w-full h-auto aspect-video"/>*/ }
				<div className="w-full h-auto aspect-video bg-gray-50"></div>
				<div className="w-full h-fit flex flex-row justify-between items-center bg-white">
					<div className="p-4 flex flex-row flex-start items-center gap-4">
						<FontAwesomeIcon icon={ faUser } size={ "lg" } color={ "gray" }/>
						<div className="w-fit h-fit">
							<h2 className="font-bold text-gray-900">{ lecture.title }</h2>
							<p className="font-normal text-xs text-gray-800">{ lecture.user_id }</p>
						</div>
					</div>
					<div className="p-4 flex flex-col items-end">
						<div className="flex flex-row items-center gap-1">
							<FontAwesomeIcon icon={ faHeart } size={ "xs" } color={ "gray" }/>
							<span className="text-xs">{ 123 }</span>
						</div>
						<div className="flex flex-row items-center gap-1">
							<FontAwesomeIcon icon={ faClock } size={ "xs" } color={ "gray" }/>
							<span className="text-xs">{ lecture.created_at }</span>
						</div>
					</div>
				</div>
			</a>
		</li>
	);
}