import { DataType } from "@/types";
import {
  faClock,
  faHeart,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  lecture: DataType;
}

export default function LectureItem({ lecture }: Props) {
  return (
    <li className="relative w-full h-fit drop-shadow-sm">
      <a href="/lectures/">
        {/*<img src={ "" } alt="Thumbnail" className="w-full h-auto aspect-video"/>*/ }
        <div className="w-full h-auto aspect-video bg-gray-100"></div>
        <div className="w-full h-fit px-4 py-3 flex flex-row justify-start items-start gap-4 bg-white">
          <FontAwesomeIcon icon={ faUser } size={ "xl" } color={ "gray" } className="p-2 flex-none"/>
          <div className="w-full h-fit flex-1 overflow-hidden">
            <h2 className="font-bold text-gray-900 truncate">{ lecture.lecture_title }</h2>
            <p className="font-normal text-xs text-gray-800 truncate">{ lecture.user_name }</p>
            <div className="w-fit h-fit pt-2 flex-none flex flex-row justify-start items-center gap-2">
              <div className="flex flex-row items-center gap-1">
                <FontAwesomeIcon icon={ faHeart } size={ "xs" } color={ "gray" }/>
                <span className="text-xs truncate">{ lecture.lecture_view_count }</span>
              </div>
              <div className="flex flex-row items-center gap-1">
                <FontAwesomeIcon icon={ faClock } size={ "xs" } color={ "gray" }/>
                <span className="text-xs truncate">{ lecture.created_at }</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
