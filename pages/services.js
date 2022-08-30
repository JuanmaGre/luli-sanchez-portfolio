import React, { useState } from 'react'
import Layout from '../components/Layout'
import 'animate.css';
import { servicesInfo } from '../profile'


function ServicesCard({ user }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div className='justify-center items-center animate__animated animate__fadeInUp space-y-8'>
                <img
                    src="asd.jpeg"
                    alt=""
                    width={300}
                    className='rounded-full'
                />
                <button 
                    className='services animate__animated animate__fadeInUp'
                    type='button'
                    onClick={() => setShowModal(true)}
                >
                    {user.title}
                </button>
                {
                    showModal ? (
                        <div className="flex justify-center items-center overflow-hidden fixed -top-10 z-50 outline-none focus:outline-none rounded-full animate__animated animate__fadeInUp">
                            <div className="relative">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-300 outline-none focus:outline-none">
                                    <div className="flex items-center justify-center p-5 border-b border-solid border-gray-100 space-x-2">
                                        <h3 className="text-3xl font=semibold">
                                            {user.title}
                                        </h3>
                                    </div>
                                    <div className="relative p-6 space-y-2 flex-auto">
                                        <label className="block text-black text-lg font-bold mb-1">
                                            Stories
                                        </label>
                                        <p>
                                            {user.stories}
                                        </p>
                                        <label className="block text-black text-lg font-bold mb-1">
                                            Reels
                                        </label>
                                        <p>
                                            {user.reels}
                                        </p>
                                        <label className="block text-black text-lg font-bold mb-1">
                                            Posts
                                        </label>
                                        <p>
                                            {user.posts}
                                        </p>
                                        <label className="block text-black text-lg font-bold mb-1">
                                            Counseling
                                        </label>
                                        <p>
                                            {user.description}
                                        </p>
                                        <label className="block text-black text-lg font-bold mb-1">
                                            Biography Optimization
                                        </label>
                                        <p className="appearance-none border-none w-full py-0 px-1 text-black">
                                            {user.bio}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-center p-2 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 hover:text-red-900 background-transparent font-bold uppercase
                                            px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    );
};

const servicesData = () => {
    return (
        <Layout>
            <div className='flex-row bg-gradient-to-r from-white via-slate-100 to-white'>
                <h1 className='flex justify-center pt-8 text-5xl font-footer font-semibold cursor-default animate__animated animate__fadeInUp'>
                    Services
                </h1>
            </div>
            <div className='flex-row flex justify-center pt-8 pb-12 space-x-36 bg-gradient-to-r from-white via-slate-100 to-white'>
                {   
                    servicesInfo.map((user, i) => (
                        <ServicesCard user={user} key={i} />
                    ))
                }
            </div>
        </Layout>
    );
};


export default servicesData