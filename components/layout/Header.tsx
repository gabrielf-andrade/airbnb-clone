import Link from "next/link";
import AirbnbLogo from "../ui/AirbnbLogo";
import AirbnbLogoNL from "../ui/AirbnbLogoNL";
import { HiSearch } from "react-icons/hi";

export default function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-5 grid grid-flow-col auto-cols-auto bg-white shadow-md p-5 lg:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto w-fit">
        <Link href="/">
          <div className="hidden lg:block">
            <AirbnbLogo />
          </div>
          <div className="lg:hidden">
            <AirbnbLogoNL />
          </div>
        </Link>
      </div>

      <div className="flex items-center mx-auto w-full md:w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-4/6 border rounded-full py-1 pr-2 pl-4 shadow hover:shadow-md transition-shadow duration-200">
        <input
          className="grow outline-none block"
          type="text"
          placeholder="Search..."
          name=""
          id=""
        />
        <HiSearch className="bg-[#FF385C] text-white rounded-full p-2 ml-2 h-8 w-8 min-w-min cursor-pointer" />
      </div>
      <div>{/*NAV*/}</div>
    </header>
  );
}
