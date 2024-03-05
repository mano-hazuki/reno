import { Link } from "@inertiajs/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

import { Logo } from "@/Components/Logo";
import { Sidebar } from "@/Components/Sidebar";

import { User } from "@/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface Props {
	user: User;
}

/* Context for Sidebar */
export interface SidebarOpenContextValueType {
	isOpen: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const contextDefaultValue: SidebarOpenContextValueType = {
	isOpen: false,
	setOpen: () => {
	}
};
export const SidebarOpenContext = createContext<SidebarOpenContextValueType>(contextDefaultValue);

export default function Header({ user }: Props) {
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);
	return (
		<>
			<header className="sticky top-0 left-0 right-0 z-10 w-full h-fit px-6 py-4 flex-none flex flex-row justify-between items-center bg-white drop-shadow-sm">
				<Logo href={ route("home") } className=""/>
				<div className="w-fit h-fit flex flex-row items-center gap-6">
					<Link href={ route("search") } className="">
						<FontAwesomeIcon icon={ faMagnifyingGlass } size={ "lg" } color={ "gray" }/>
					</Link>
					<button type="button" className="" onClick={ () => toggle() }>
						<FontAwesomeIcon icon={ faUser } size={ "lg" } color={ "gray" }/>
					</button>
				</div>
			</header>
			<SidebarOpenContext.Provider value={ { isOpen, setOpen } }>
				<Sidebar/>
			</SidebarOpenContext.Provider>
		</>
	);
}
