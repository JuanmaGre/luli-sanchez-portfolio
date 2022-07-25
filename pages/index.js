import Head from 'next/head'
import Link from 'next/link'




export default function index() {
    return (
        <div>
            <Head>
                <title>LPS Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className='relative inline-block text-center'>
                <img 
                    src="/background.svg"
                    alt=""
                    className='bg-cover'
                    // max-width={1920}
                    // max-height={1068}
                />
                <div className='text-7xl tracking-wide content-center items-center
            font-title'>
                    <h6 className='text-black tracking-tighter text-2xl cursor-default'>
                        Luli Sanchez
                    </h6>
                    <h1 className='text-[#6366F1]/50 cursor-default'>
                        My Portfolio
                    </h1>
                </div>
                <div>
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
            
        </div>
    );
};