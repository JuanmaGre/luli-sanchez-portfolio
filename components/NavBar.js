import Link from "next/link";
import { HomeIcon } from "@heroicons/react/outline"



export default function Navbar() {
    return (
    <nav className="bg-[#ffedd5]/50 py-2.5">
        <div className="flex justify-center items-center mr-4 space-x-2 md:space-x-10">
            <ul className="flex -ml-12 items-center cursor-pointer hover:bg-[#a5b4fc] rounded-2xl">
                <Link href="/home">
                    <HomeIcon 
                        className="nav-link active h-6 w-6"
                        aria-current="page"
                    />
                </Link>
            </ul>
            <ul className="hidden space-x-4 md:flex">
                <li className="navBarLinks">
                    <Link href="/aboutMe">
                        <a className="nav-link active" aria-current="page">
                            About Me
                        </a>
                    </Link>
                </li>
                <li className="navBarLinks">
                    <Link href="/portfolio">
                        <a className="nav-link active" aria-current="page">
                            Portfolio
                        </a>
                    </Link>
                </li>
                <li className="navBarTitle cursor-default">
                    <h1>
                        Luli Sanchez
                    </h1>
                </li>
                <li className="navBarLinks">
                    <Link href="/services">
                        <a className="nav-link active" aria-current="page">
                            Services
                        </a>
                    </Link>
                </li>
                <li className="navBarLinks">
                    <Link href="/contact">
                        <a className="nav-link active" aria-current="page">
                            Contact
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    );
};