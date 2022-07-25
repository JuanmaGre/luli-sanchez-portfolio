import Head from 'next/head'
import Link from 'next/link'




export default function index() {
    return (
        <div>
            <Head>
                <title>LPS Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className='relative'>
                <div className='absolute'>
                    <img 
                        src="/background.svg"
                        alt=""
                        className="object-cover"
                    />
                </div>
                
                <div className='absolute my-40 mx-96 font-title'>
                    <h6 className='flex text-black justify-center tracking-tighter text-2xl cursor-default'>
                        Luli Sanchez
                    </h6>
                    <h1 className='text-9xl tracking-wide text-[#6366F1]/50 cursor-default'>
                        Portfolio
                    </h1>
                </div>

                <div className='absolute my-72 ml-80'>
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