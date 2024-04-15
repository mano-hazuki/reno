import { InputHTMLAttributes } from "react";

import { classnames } from "@/Lib/classnames";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

export function Checkbox({ className = "", ...props }: Props) {
	return (
		<input { ...props } type="checkbox" className={ classnames("rounded border border-solid border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500", className) }/>
	);
}
