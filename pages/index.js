import Head from 'next/head'
import Link from 'next/link'




export default function index() {
    return (
        <div>
            <Head>
                <title>LPS Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <button className='bg-[#1d4ed8]'>
                <Link href="/home">
                <a className="nav-link active font-footer text-5xl" aria-current="page">
                    English
                </a>
                </Link>
            </button>
            <button className='bg-[#1d4ed8]'>
            <Link href="/homeSpa">
                <a className="nav-link active font-bold font-footer text-5xl" aria-current="page">
                    Spanish
                </a>
                </Link>
            </button>
        </div>
    )
};