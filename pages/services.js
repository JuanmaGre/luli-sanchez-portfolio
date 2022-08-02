import React from 'react'
import Layout from '../components/Layout'



function services() {
    return (
        <Layout>
            <div className='flex-row'>
                <h1 className='flex justify-center my-4 text-6xl font-title cursor-default'>
                    Services
                </h1>
                <h4 className='flex justify-center my-6 text-xl font-semibold items-center mb-40 cursor-default'>
                    Work with me
                </h4>

                <div className='flex justify-center -mt-32 px-4 mb-12 space-x-36'>
                    <div>
                        <img
                            src="asd.jpeg"
                            alt=""
                            width={275}
                            className='rounded-t-full'
                        />
                        <h1 className='justify-center text-center text-xl pt-5'>
                            card 1
                        </h1>
                    </div>
                    <div>
                        <img
                            src="asd.jpeg"
                            alt=""
                            width={275}
                            className='rounded-t-full'
                        />
                        <h1 className='justify-center text-center'>
                            card 2
                        </h1>
                    </div>
                    <div>
                        <img
                            src="asd.jpeg"
                            alt=""
                            width={275}
                            className='rounded-t-full'
                        />
                        <h1 className='justify-center text-center'>
                            card 3
                        </h1>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default services