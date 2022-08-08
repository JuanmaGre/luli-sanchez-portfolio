import React from 'react'
import Layout from '../components/Layout'
import 'animate.css';


function services() {
    return (
        <Layout>
            <div className='flex-row bg-gradient-to-r from-white via-slate-100 to-white'>
                <h1 className='flex justify-center pt-8 text-5xl font-footer font-semibold cursor-default animate__animated animate__fadeInUp'>
                    Services
                </h1>

                <div className='flex justify-center pt-8 px-4 pb-12 space-x-36'>
                    <div className='animate__animated animate__fadeInLeft'>
                        <img
                            src="asd.jpeg"
                            alt=""
                            width={300}
                            className='rounded-full'
                        />
                        <h1 className='services animate__animated animate__fadeInLeft'>
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
                    <div className='animate__animated animate__fadeInUp'>
                        <img
                            src="asd.jpeg"
                            alt=""
                            width={300}
                            className='rounded-full'
                        />
                        <h1 className='services animate__animated animate__fadeInUp'>
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
                    <div className='animate__animated animate__fadeInRight'>
                        <img
                            src="asd.jpeg"
                            alt=""
                            width={300}
                            className='rounded-full'
                        />
                        <h1 className='services animate__animated animate__fadeInRight'>
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