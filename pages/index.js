import Head from 'next/head'
import Link from 'next/link'




export default function index() {
    return (
        <div>
            <Head>
                <title>LPS Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className='flex'>
                <div className='static'>
                    <img 
                        src="/background.svg"
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
                
                <div className='divLanding'>
                    <h6 className='h6Landing'>
                        Luli Sanchez
                    </h6>
                    <h1 className='h1Landing'>
                        Portfolio
                    </h1>
                </div>

                <div className='absolute my-36 ml-48'>
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