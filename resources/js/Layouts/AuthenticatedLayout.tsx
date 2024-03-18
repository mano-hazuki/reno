import { StrictMode } from "react";

import Header from "@/Components/Header";

import type { User } from "@/types";
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
	user: User;
}

export function AuthenticatedLayout({ user, children }: Props) {
	return (
		<StrictMode>
			<div className="w-full h-fit min-h-screen flex flex-col items-center bg-white">
				<Header user={user} />
				{children}
				{/*<Footer/>*/}
			</div>
		</StrictMode>
	);
}
