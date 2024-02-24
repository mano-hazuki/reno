import { PropsWithChildren } from "react";

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className="w-full h-fit min-h-screen flex flex-col items-center bg-white">
			<Header/>
			{ children }
			<Footer/>
		</div>
	);
}
