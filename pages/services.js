import React from 'react'
import Layout from '../components/Layout'



function services() {
    return (
        <Layout>
            <div className='flex-row bg-gradient-to-r from-white via-slate-100 to-white'>
                <h1 className='flex justify-center pt-8 text-5xl font-footer font-semibold cursor-default'>
                    Services
                </h1>

                <div className='flex justify-center pt-8 px-4 pb-12 space-x-36'>
                    <div>
                        <img
                            src="asd.jpeg"
                            alt=""
                            width={300}
                            className='rounded-full'
                        />
                        <h1 className='services'>
                            Basic
                        </h1>
                        <p>
                            4 stories
                        </p>
                        <p>
                            2 posts
                        </p>
                        <p>
                            3 reels
                        </p>
                    </div>
                    <div>
                        <img
                            src="asd.jpeg"
                            alt=""
                            width={300}
                            className='rounded-full'
                        />
                        <h1 className='services'>
                            Standard
                        </h1>
                        <p className=''>
                            4 stories
                        </p>
                        <p className=''>
                            2 posts
                        </p>
                        <p className=''>
                            3 reels
                        </p>
                    </div>
                    <div>
                        <img
                            src="asd.jpeg"
                            alt=""
                            width={300}
                            className='rounded-full'
                        />
                        <h1 className='services'>
                            Premium
                        </h1>
                        <p>
                            4 stories
                        </p>
                        <p>
                            2 posts
                        </p>
                        <p>
                            3 reels
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default services