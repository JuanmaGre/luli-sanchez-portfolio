import React from 'react'
import Layout from '../components/Layout'

function aboutMe() {
    return (
        <Layout>
            <div className='grid grid-cols-2 mx-2 py-2'>
                <div>
                    <img 
                        src="asd.jpeg"
                        alt=""
                        width={660}
                        max-height={400}
                    />
                </div>
                <div className='bg-[#d6d3d1]'>
                    <h1 className='justify-center text-center mt-4 mb-8 text-4xl font-bold tracking-wide'>
                        HI! I AM LUCIANA,<br></br>COMMUNITY MANAGER
                    </h1>
                    <h4 className='justify-center text-left ml-10 text-2xl mb-2'>
                        I TELL YOU A LITTLE ABOUT ME
                    </h4>
                    <p className='justify-center text-left ml-5 text-lg pt-5'>
                        - I am studying bachelor's degree in Advertising at the UADE.<br></br>
                        - I am a student of the Digital Marketing career at Coderhouse.<br></br>
                        - In addition, I independently carry out consultancies for people/businesses on social media
                        and branding.<br></br>
                        - I am studying bachelor's degree in Advertising at the UADE.<br></br>
                        - I am a student of the Digital Marketing career at Coderhouse.<br></br>
                        - In addition, I independently carry out consultancies for people/businesses on social media
                        and branding.<br></br>
                        - I am studying bachelor's degree in Advertising at the UADE.<br></br>
                        - I am a student of the Digital Marketing career at Coderhouse.<br></br>
                        - In addition, I independently carry out consultancies for people/businesses on social media
                        and branding.<br></br>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default aboutMe