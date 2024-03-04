import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function SearchForm() {
	return (
		<section id="search_form" className="w-full h-fit m-8 grid place-items-center">
			<form action="" method="get" className="w-2/3 h-10 flex items-center border border-solid border-gray-600 rounded-lg overflow-hidden">
				<button type="submit" className="w-fit h-fit mx-4 flex-none">
					<FontAwesomeIcon icon={ faMagnifyingGlass } size="lg" color="gray"/>
				</button>
				<input type="search" name="q" placeholder="Search" className="text-lg w-auto h-full flex-1"/>
			</form>
		</section>
	);
}