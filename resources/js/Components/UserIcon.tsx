import { faUser } from "@fortawesome/free-solid-svg-icons";
import type { InertiaLinkProps } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

import { classnames } from "@/Lib/classnames";
import type { User } from "@/types";
import { Icon } from "./Icon";

interface Props extends InertiaLinkProps {
	user: User | null;
}

export function UserIcon({ user, href = "", className = "", ...props }: Props) {
	return (
		<Link href={href} className={classnames("", className)} {...props}>
			{user ? <img src={user.image_url} alt="User" className="text-white text-opacity-80" /> : <Icon icon={faUser} className="text-white text-opacity-80 text-xl p-4" />}
		</Link>
	);
}
