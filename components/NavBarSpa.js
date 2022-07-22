import Link from "next/link";


export default function Navbar() {
    return (
    <nav>
        <div className="flex justify-center items-center mt-3 space-x-2 md:space-x-10">
            <ul className="hidden space-x-4 md:flex">
                <li className="navBarLinks">
                    <Link href="/sobreMi">
                        <a className="nav-link active" aria-current="page">
                            Sobre Mi
                        </a>
                    </Link>
                </li>
                <li className="navBarLinks">
                    <Link href="/portfolioSpa">
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
                    <Link href="/servicios">
                        <a className="nav-link active" aria-current="page">
                            Servicios
                        </a>
                    </Link>
                </li>
                <li className="navBarLinks">
                    <Link href="/contacto">
                        <a className="nav-link active" aria-current="page">
                            Contacto
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    );
};