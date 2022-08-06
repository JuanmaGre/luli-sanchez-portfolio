import React from 'react'
import Layout from '../components/Layout'



function contact() {
    return (
        <Layout>
            <div>
                <h1 className='text-4xl py-12 justify-center text-center'>
                    Contact
                </h1>
                <div className='flex-mb-4'>
                <form className='main'>
                    <formGroup className="inputGroup">
                        <label htmlFor='name' className='inputLabel'>
                            Full Name
                        </label>
                        <input 
                            type='text' 
                            name='name' 
                            className="inputField" 
                        />  
                    </formGroup>
                    <formGroup className="inputGroup">
                        <label htmlFor='email' className='inputLabel'>
                            Email
                        </label>
                        <input 
                            type='email'
                            name='email' 
                            className="inputField" 
                        />
                    </formGroup>
                    <formGroup className="inputGroup">
                        <label htmlFor='subject' className='inputLabel'>
                            Subject
                        </label>
                        <input 
                            type='text'
                            name='subject' 
                            className="inputField" 
                        />
                    </formGroup>
                    <formGroup className="inputMess">
                        <label htmlFor='message' className='inputLabel'>
                            Message
                        </label>
                        <input 
                            type='text' 
                            name='message' 
                            className="inputField2" 
                        />
                    </formGroup>
                    <button
                        type='submit'
                        className='buttonSubmit'
                    >
                        Submit
                    </button>
                </form>
                </div>
            </div>
        </Layout>
    );
};

export default contact