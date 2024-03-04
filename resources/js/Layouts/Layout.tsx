import { PropsWithChildren, StrictMode } from "react";

import Header from "@/Components/Header";

export function Layout({ children }: PropsWithChildren) {
	return (
		<StrictMode>
			<div className="w-full h-fit min-h-screen flex flex-col items-center bg-white">
				<Header/>
				{ children }
				{/*<Footer/>*/ }
			</div>
		</StrictMode>
	);
}
