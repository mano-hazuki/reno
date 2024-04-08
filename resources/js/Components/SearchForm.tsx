import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "./Icon";

export function SearchForm() {
	return (
		<section id="search_form" className="w-full h-fit m-8 grid place-items-center">
			<form action="" method="get" className="w-full h-10 flex items-center border border-solid border-white border-opacity-60 rounded-lg overflow-hidden">
				<button type="submit" className="w-fit h-fit mx-4 flex-none">
					<Icon icon={faMagnifyingGlass} className="text-lg text-white text-opacity-60" />
				</button>
				<input type="search" name="q" placeholder="Search" className="text-lg text-white text-opacity-80 placeholder:text-opacity-60 w-auto h-full flex-1" />
			</form>
		</section>
	);
}
