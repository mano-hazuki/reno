import { StrictMode } from "react";
import type { PropsWithChildren } from "react";

import Header from "@/Components/Header";

import type { User } from "@/types";

interface Props extends PropsWithChildren {
	user: User | null;
}

export function Layout({ user, children }: Props) {
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
