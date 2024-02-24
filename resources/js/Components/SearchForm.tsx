import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchForm() {
	return (
		<form action="" method="post" className="w-fit max-w-screen h-fit p-8 flex flex-row items-center">
			<input type="search" name="q" placeholder="ワードを入力" minLength={ 1 } maxLength={ 32 }/>
			<button type="submit" className="p-4">
				<FontAwesomeIcon icon={ faMagnifyingGlass } size={ "lg" } color={ "gray" }/>
			</button>
		</form>
	);
}