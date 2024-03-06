import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faArrowRightToBracket, faTableColumns, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";

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
					<ul className="w-full h-fit p-2">
						<li key={ 0 } className="flex flex-row justify-between items-center gap-8">
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
						<Presentation key={ 1 }/>
						{ user ? ItemsForUser(user) : ItemsForGuest() }
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

function ItemsForUser(user: User) {
	return (
		<>
			<NavItem key={ 2 } href="" className="w-full px-4 py-3">
				<FontAwesomeIcon icon={ faUser } className="text-lg text-gray-500"/>
				<span className="text-gray-900">Profile</span>
			</NavItem>
			<NavItem key={ 3 } href="" className="w-full px-4 py-3">
				<FontAwesomeIcon icon={ faTableColumns } className="text-lg text-gray-500"/>
				<span className="text-gray-900">Dashboard</span>
			</NavItem>

			<Presentation key={ 4 }/>

			<NavItem key={ 5 } href="" className="w-full px-4 py-3">
				<FontAwesomeIcon icon={ faUser } className="text-lg text-gray-500"/>
				<span className="text-gray-900">Your profile</span>
			</NavItem>
			<NavItem key={ 6 } href="" className="w-full px-4 py-3">
				<FontAwesomeIcon icon={ faUser } className="text-lg text-gray-500"/>
				<span className="text-gray-900">Your profile</span>
			</NavItem>
			<NavItem key={ 7 } href="" className="w-full px-4 py-3">
				<FontAwesomeIcon icon={ faUser } className="text-lg text-gray-500"/>
				<span className="text-gray-900">Your profile</span>
			</NavItem>
			<NavItem key={ 8 } href="" className="w-full px-4 py-3">
				<FontAwesomeIcon icon={ faUser } className="text-lg text-gray-500"/>
				<span className="text-gray-900">Your profile</span>
			</NavItem>

			<Presentation key={ 9 }/>

			<NavItem key={ 10 } href={ route("logout") } method="post" className="w-full px-4 py-3">
				<FontAwesomeIcon icon={ faArrowRightFromBracket } className="text-lg text-gray-500"/>
				<p className="text-gray-900">Logout</p>
			</NavItem>
		</>
	);
}

function ItemsForGuest() {
	return (
		<NavItem key={ 2 } href={ route("login") } method="get" className="w-full px-4 py-3">
			<FontAwesomeIcon icon={ faArrowRightToBracket } className="text-lg text-gray-500"/>
			<p className="text-gray-900">Login</p>
		</NavItem>
	);
}