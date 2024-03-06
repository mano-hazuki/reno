import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";

import { SidebarOpenContext } from "@/Components/Header";

import { User } from "@/types";
import { UserIcon } from "@/Components/UserIcon";
import { NavItem } from "@/Components/NavItem";
import { classnames } from "@/Lib/classnames";

interface Props {
	user: User;
}

export function Sidebar({ user }: Props) {
	const { isOpen, setOpen } = useContext(SidebarOpenContext);
	const toggle = () => setOpen(!isOpen);
	const displayName: string = user ? user.display_name : "Guest";
	const username: string = user ? "@" + user.name : "Not logged in";
	return (
		<>
			<dialog open={ isOpen } className="fixed z-20 top-0 right-0 w-fit h-screen bg-white drop-shadow">
				<nav className="w-full h-fit">
					<ul className="w-full h-fit p-2 overflow-y-scroll">
						<li className="flex flex-row justify-between items-center gap-8">
							<div className="py-3 flex flex-row justify-start items-center gap-4">
								<UserIcon href={ user ? route("account") : route("login") } user={ user } className="flex-none"/>
								<div className="flex-grow-0 flex-shrink-1 flex flex-col items-start">
									<p className="font-medium text-base text-black truncate">{ displayName }</p>
									<p className="font-normal text-sm text-gray-600 truncate">{ username }</p>
								</div>
							</div>
							<button type="button" onClick={ toggle } className="w-fit h-fit">
								<FontAwesomeIcon icon={ faXmark } className="text-xl text-gray-500 p-3"/>
							</button>
						</li>

						<Presentation/>

						<NavItem key={ 0 } href="" className="w-full px-4 py-3">
							<FontAwesomeIcon icon={ faUser } className="text-lg text-gray-600"/>
							<span className="font-medium text-black">Profile</span>
						</NavItem>
						<NavItem key={ 1 } href="" className="w-full px-4 py-3">
							<FontAwesomeIcon icon={ faTableColumns } className="text-lg text-gray-600"/>
							<span className="font-medium text-black">Dashboard</span>
						</NavItem>

						<Presentation/>

						<NavItem key={ 2 } href="" className="w-full px-4 py-3">
							<FontAwesomeIcon icon={ faUser } className="text-lg text-gray-600"/>
							<span className="text-black">Your profile</span>
						</NavItem>
						<NavItem key={ 3 } href="" className="w-full px-4 py-3">
							<FontAwesomeIcon icon={ faUser } className="text-lg text-gray-600"/>
							<span className="text-black">Your profile</span>
						</NavItem>
						<NavItem key={ 4 } href="" className="w-full px-4 py-3">
							<FontAwesomeIcon icon={ faUser } className="text-lg text-gray-600"/>
							<span className="text-black">Your profile</span>
						</NavItem>
						<NavItem key={ 5 } href="" className="w-full px-4 py-3">
							<FontAwesomeIcon icon={ faUser } className="text-lg text-gray-600"/>
							<span className="text-black">Your profile</span>
						</NavItem>

						<Presentation/>

						<NavItem key={ 6 } href={ route("logout") } method="post" className="w-full px-4 py-3">
							<p className="text-black">Log out</p>
						</NavItem>
					</ul>
				</nav>
			</dialog>
			{/* Background */ }
			<div className={ classnames(isOpen ? "fixed" : "hidden", "w-full h-screen z-10 top-0 bg-gray-800 opacity-25") }/>
		</>
	);
}

function Presentation() {
	return (
		<li className="w-full h-[1px] my-2 bg-gray-200"/>
	);
}