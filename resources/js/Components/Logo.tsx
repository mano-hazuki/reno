import { AnchorHTMLAttributes } from "react";
import { classnames } from "@/Lib/classnames";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
}

export function Logo({ className = "", href = "/", ...props }: Props) {
	return (
		<a href={ href } className={ classnames("w-fit h-fit flex flex-row items-center gap-2", className) } { ...props }>
			<img src={ "/images/logo.png" } alt="Logo" className="relative w-6 h-6 aspect-square"/>
			<span className="font-comfortaa font-normal text-2xl">reno</span>
		</a>
	);
}
