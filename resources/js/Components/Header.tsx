import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full h-fit px-2 flex-none flex flex-row justify-between items-center bg-white drop-shadow-sm">
      <a href="/" className="w-fit h-fit">
        <img src={ "" } alt="Logo" className="p-4"/>
      </a>

      <div className="flex flex-row items-center">
        <a href="/search" className="p-4">
          <FontAwesomeIcon icon={ faMagnifyingGlass } color={ "gray" }/>
        </a>
        <button type="button" className="p-4">
          <FontAwesomeIcon icon={ faUser } color={ "gray" }/>
        </button>
      </div>
    </header>
  );
}
