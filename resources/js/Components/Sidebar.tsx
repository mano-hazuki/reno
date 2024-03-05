import { useContext } from "react";
import { SidebarOpenContext } from "@/Components/Header";

export function Sidebar() {
	const { isOpen, setOpen } = useContext(SidebarOpenContext);
	const toggle = () => setOpen(!isOpen);
	return (
		<dialog open={ isOpen } className="fixed z-20 top-0 right-0 w-48 h-screen bg-white">
			<button type="button" onClick={ toggle }>Close</button>
		</dialog>
	);
}