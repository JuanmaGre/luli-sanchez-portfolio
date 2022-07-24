import Link from "next/link";


export default function Navbar() {
    return (
    <nav className="bg-[#ffedd5]/50 py-5">
        <div className="flex justify-center items-center space-x-2 md:space-x-10">
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