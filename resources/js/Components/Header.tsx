import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "@/Components/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-10 w-full h-fit px-6 py-4 flex-none flex flex-row justify-between items-center bg-white drop-shadow-sm">
      <Logo className=""/>
      <div className="w-fit h-fit flex flex-row items-center gap-6">
        <a href="/search" className="">
          <FontAwesomeIcon icon={ faMagnifyingGlass } size={ "lg" } color={ "gray" }/>
        </a>
        <a href="/account" className="">
          <FontAwesomeIcon icon={ faUser } size={ "lg" } color={ "gray" }/>
        </a>
      </div>
    </header>
  );
}
