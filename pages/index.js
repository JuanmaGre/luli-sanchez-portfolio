import Head from 'next/head'
import Link from 'next/link'




export default function index() {
    return (
        <div>
            <Head>
                <title>LPS Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <button>
                <Link href="/home">
                <a className="nav-link active" aria-current="page">
                    English
                </a>
                </Link>
            </button>
            <button>
            <Link href="/homeSpa">
                <a className="nav-link active" aria-current="page">
                    Spanish
                </a>
                </Link>
            </button>
        </div>
    )
};