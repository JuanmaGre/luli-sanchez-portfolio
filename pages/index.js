import Head from 'next/head'
import Link from 'next/link'




export default function index() {
    return (
        <div>
            <Head>
                <title>LPS Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <img 
                src="/background.svg"
                alt=""
                // max-width={1920}
                // max-height={1068}
                className="absolute object-cover"
            />
            <div className='text-7xl tracking-wide content-center justify-center items-center font-title absolute ml-40'>
                <h6 className='text-black tracking-tighter text-2xl ml-24 cursor-default'>
                    Luli Sanchez
                </h6>
                <h1 className='text-[#6366F1]/50 cursor-default'>
                    My Portfolio
                </h1>
            </div>
            <div className='flex justify-center items-center py-40 space-x-40'>
                <Link href="/home">
                    <button className='buttonLanding'>
                        <a className="nav-link active" aria-current="page">
                            english
                        </a>        
                    </button>
                </Link>
                
                <Link href="/homeSpa">
                    <button className='buttonLanding'>
                        <a className="nav-link active" aria-current="page">
                            español
                        </a>
                    </button>
                </Link>
            </div>
        </div>
    )
};