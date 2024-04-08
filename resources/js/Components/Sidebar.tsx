import { faArrowRightFromBracket, faArrowRightToBracket, faTableColumns, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";

import { SidebarOpenContext } from "@/Components/Header";
import { NavItem } from "@/Components/NavItem";
import { UserIcon } from "@/Components/UserIcon";
import type { User } from "@/types";
import { Icon } from "./Icon";

interface Props {
	user: User | null;
}

export function Sidebar({ user }: Props) {
	const { isOpen, setOpen } = useContext(SidebarOpenContext);
	const toggle = () => setOpen(!isOpen);
	const displayName: string = user ? user.display_name : "Guest";
	const username: string = user ? `@${user.name}` : "Not logged in";
	return (
		<>
			<dialog open={isOpen} className="fixed z-20 top-0 right-0 w-fit h-screen backdrop-blur bg-zinc-900 bg-opacity-80">
				<nav className="w-full h-fit">
					<ul className="w-full h-fit p-2">
						<li key={0} className="flex flex-row justify-between items-center gap-8">
							<div className="py-3 flex flex-row justify-start items-center gap-4">
								<UserIcon href={user ? route("account") : route("login")} user={user} className="flex-none" />
								<div className="flex-grow-0 flex-shrink-1 flex flex-col items-start">
									<p className="font-medium text-base text-white text-opacity-80 truncate">{displayName}</p>
									<p className="font-normal text-sm text-white text-opacity-60 truncate">{username}</p>
								</div>
							</div>
							<button type="button" onClick={toggle} className="w-fit h-fit">
								<Icon icon={faXmark} className="text-xl text-white text-opacity-80 p-3" />
							</button>
						</li>
						<Presentation key={1} />
						{user ? ItemsForUser(user) : ItemsForGuest()}
					</ul>
				</nav>
			</dialog>
			{/* Background */}
			{/* <div className={classnames(isOpen ? "fixed" : "hidden", "w-full h-screen z-10 top-0 bg-zinc-900 opacity-50")} /> */}
		</>
	);
}

function Presentation() {
	return <li className="w-full h-[1px] my-2 bg-white bg-opacity-10" />;
}

function ItemsForUser(user: User) {
	return (
		<>
			<NavItem key={2} href="" className="w-full px-4 py-3">
				<Icon icon={faUser} className="text-lg text-white text-opacity-60" />
				<span className="text-white text-opacity-80">Profile</span>
			</NavItem>
			<NavItem key={3} href="" className="w-full px-4 py-3">
				<Icon icon={faTableColumns} className="text-lg text-white text-opacity-60" />
				<span className="text-white text-opacity-80">Dashboard</span>
			</NavItem>

			<Presentation key={4} />

			<NavItem key={5} href="" className="w-full px-4 py-3">
				<Icon icon={faUser} className="text-lg text-white text-opacity-60" />
				<span className="text-white text-opacity-80">Your profile</span>
			</NavItem>
			<NavItem key={6} href="" className="w-full px-4 py-3">
				<Icon icon={faUser} className="text-lg text-white text-opacity-60" />
				<span className="text-white text-opacity-80">Your profile</span>
			</NavItem>
			<NavItem key={7} href="" className="w-full px-4 py-3">
				<Icon icon={faUser} className="text-lg text-white text-opacity-60" />
				<span className="text-white text-opacity-80">Your profile</span>
			</NavItem>
			<NavItem key={8} href="" className="w-full px-4 py-3">
				<Icon icon={faUser} className="text-lg text-white text-opacity-60" />
				<span className="text-white text-opacity-80">Your profile</span>
			</NavItem>

			<Presentation key={9} />

			<NavItem key={10} href={route("logout")} method="post" className="w-full px-4 py-3">
				<Icon icon={faArrowRightFromBracket} className="text-lg text-red-500 text-opacity-80" />
				<p className="text-red-500">Logout</p>
			</NavItem>
		</>
	);
}

function ItemsForGuest() {
	return (
		<NavItem key={2} href={route("login")} method="get" className="w-full px-4 py-3">
			<Icon icon={faArrowRightToBracket} className="text-lg text-white text-opacity-60" />
			<p className="text-white text-opacity-80">Login</p>
		</NavItem>
	);
}
