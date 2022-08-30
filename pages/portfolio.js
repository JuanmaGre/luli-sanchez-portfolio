import React from 'react'
import Layout from '../components/Layout'
import 'animate.css'


function portfolio() {
    return (
        <Layout>
            <div className='bg-gradient-to-r from-white via-slate-100 to-white'>
                <h1 className='text-5xl py-6 justify-center text-center font-footer font-bold animate__animated animate__fadeInDown'>
                    Recent Works
                </h1>
            </div>
            <div className='bg-gradient-to-r from-white via-slate-100 to-white'>
                <div className='grid grid-cols-1 justify-items-stretch px-32 pb-10 space-y-5'>
                    <div className='justify-self-start animate__animated animate__fadeInLeft'>
                        <img 
                            src="asd.jpeg"
                            alt=""
                            width={200}
                            className='rounded-xl'
                        />
                    </div>
                    <div className='justify-self-end animate__animated animate__fadeInRight'>
                        <img 
                            src="luli.jpeg"
                            alt=""
                            width={250}
                            className='rounded-2xl'
                        />
                    </div>
                    <div className='justify-self-start animate__animated animate__fadeInLeft'>
                        <img 
                            src="asd.jpeg"
                            alt=""
                            width={300}
                            className='rounded-t-3xl'
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default portfolio