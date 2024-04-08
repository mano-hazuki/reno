import type { User } from "@/types";
import { UserIcon } from "./UserIcon";

interface Props {
	user: User;
}

export function UserInfo({ user }: Props) {
	return (
		<div className="w-full h-fit">
			<div className="w-full h-fit p-4 rounded bg-white bg-opacity-5 flex flex-row justify-between items-center">
				<div className="w-full h-fit flex-1 flex flex-row items-center gap-4">
					<UserIcon user={user} href={`/${user.name}`} className="rounded-full border border-solid border-white border-opacity-10" />
					<span className="w-fit h-fit flex flex-col items-start">
						<p className="text-base text-white text-opacity-80 truncate">{user.display_name}</p>
						<p className="text-xs text-white text-opacity-60 truncate">1234 followers</p>
					</span>
				</div>

				{/* Follow button */}
				<button type="button" className="p-2 text-sm text-white text-opacity-80 rounded bg-white bg-opacity-10">
					Follow
				</button>
			</div>
		</div>
	);
}
