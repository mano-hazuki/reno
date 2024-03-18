import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { User } from "@/types";
import { classnames } from "@/Lib/classnames";
import { InertiaLinkProps, Link } from "@inertiajs/react";

interface Props extends InertiaLinkProps {
	user: User | null;
}


export function UserIcon({ user, href = "", className = "", ...props }: Props) {
	return (
		<Link href={ href } className={ classnames("", className) } { ...props }>
			{ user ?
				<img src={ user.image_url } alt="User Icon" className=""/> :
				<FontAwesomeIcon icon={ faUser } className="text-gray-500 text-xl p-4"/>
			}
		</Link>
	);
}