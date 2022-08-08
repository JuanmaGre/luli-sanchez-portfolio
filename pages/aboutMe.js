import React from 'react'
import Layout from '../components/Layout'
import 'animate.css'


function aboutMe() {
    return (
        <Layout>
            <div className='grid grid-cols-2 px-2 py-2 space-x-3 lg:px-6'>
                <div className='animate__animated animate__fadeInLeft'>
                    <img 
                        src="about.jpg"
                        alt=""
                        width={660}
                    />
                </div>
                <div className='bg-[#d6d3d1] cursor-default justify-center text-center animate__animated animate__fadeInRight'>
                    <p className='font-footer font-bold text-xl pl-5 pr-5 tracking-wider xl:pt-36 lg:pt-5 lg:text-lg md:pt-10 md:text-sm'>
                    Hello! My name is Luciana Pilar Sanchez but everyone knows me as Luli. 
                    <br></br>
                    <br></br>
                    I am 25 years old and I am passionate about everything that has to do with communication and its infinite possibilities of allowing the connection between people.
                    This is one of the reasons why I decided to study a degree in Advertising, a career I am studying at the Universidad Argentina de la Empresa (UADE).
                    <br></br>
                    <br></br>
                    In addition, in the digital world I found the orientation that I want to carry out in my professional path, and therefore, I began to study the Digital Marketing career at Coderhouse.
                    <br></br>
                    <br></br>
                    This decision made me enter a universe that I really love. I am very interested in the entrepreneurial world and all that it can achieve through technology. It could be said that my daily question is how entrepreneurship can leave a mark on the world.
                    <br></br>
                    <br></br>
                    I love working in a team with short-medium and long-term goals, I love learning new things and I do it quickly. I consider myself creative and decisive, always focused on solutions. I am very committed in everything I do.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default aboutMe