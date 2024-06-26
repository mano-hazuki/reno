import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";
import type { Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";

import { Logo } from "@/Components/Logo";
import { Sidebar } from "@/Components/Sidebar";
import type { User } from "@/types";
import { Icon } from "./Icon";

interface Props {
	user: User | null;
}

/* Context for Sidebar */
export interface SidebarOpenContextValueType {
	isOpen: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const contextDefaultValue: SidebarOpenContextValueType = {
	isOpen: false,
	setOpen: () => {},
};
export const SidebarOpenContext = createContext<SidebarOpenContextValueType>(contextDefaultValue);

export default function Header({ user }: Props) {
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);
	return (
		<>
			<header className="sticky top-0 left-0 right-0 z-10 w-full h-fit px-6 py-4 backdrop-blur bg-zinc-900 bg-opacity-80 flex-none flex flex-row justify-between items-center">
				<Link href={route("home")}>
					<Logo textColor="#FFFFFF" className="w-24 h-15" />
				</Link>
				<div className="w-fit h-fit flex flex-row items-center gap-6">
					<Link href={route("search")} className="">
						<Icon icon={faMagnifyingGlass} className="text-lg text-white text-opacity-80" />
					</Link>
					<button type="button" className="" onClick={() => toggle()}>
						<Icon icon={faUser} className="text-lg text-white text-opacity-80" />
					</button>
				</div>
			</header>
			<SidebarOpenContext.Provider value={{ isOpen, setOpen }}>
				<Sidebar user={user} />
			</SidebarOpenContext.Provider>
		</>
	);
}
