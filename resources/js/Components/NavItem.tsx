import { InertiaLinkProps, Link } from "@inertiajs/react";

interface Props extends InertiaLinkProps {
}

// TODO: Need to style this component
export function NavItem({ href, className = "", children, ...props }: Props) {
	return (
		<li className={ className }>
			<Link href={ href } className="flex flex-row justify-start items-center gap-4"  { ...props }>
				{ children }
			</Link>
		</li>
	);
}
