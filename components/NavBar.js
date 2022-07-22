import Link from "next/link";


export default function Navbar() {
    return (
    <nav>
        <div className="flex justify-center items-center mt-3 space-x-2 md:space-x-10">
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
                <li className="navBarTitle">
                    <h1>
                        LULI SANCHEZ
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