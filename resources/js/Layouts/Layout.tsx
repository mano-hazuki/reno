import Header from "@/Components/Header";
import {
  PropsWithChildren,
  StrictMode
} from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <StrictMode>
      <div className="w-full h-fit min-h-screen flex flex-col items-center bg-white">
        <Header/>
        { children }
        {/*<Footer/>*/ }
      </div>
    </StrictMode>
  );
}
