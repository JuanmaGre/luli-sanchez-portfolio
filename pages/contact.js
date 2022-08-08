import React from 'react'
import Layout from '../components/Layout'
import { useState } from 'react'



function contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')
    
        let data = {
            name,
            email,
            subject,
            message
        }

        fetch('api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('I will contact you on the next 36 hours')
            if (res.status === 200) {
                console.log('Message succeeded')
                setSubmitted(true)
                setName('')
                setEmail('')
                setSubject('')
                setMessage('')
            }
        })
    }

    return (
        <Layout>
            <div>
                <h1 className='text-5xl pt-6 pb-2 justify-center text-center font-footer font-bold'>
                    Contact
                </h1>
                <div className='flex-mb-4 xl:pl-24 xl:pr-24'>
                    <form className='main rounded-3xl'>
                        <formGroup className="inputGroup">
                            <label htmlFor='name' className='inputLabel'>
                                Full Name
                            </label>
                            <input 
                                type='text'
                                onChange={(e)=>{setName(e.target.value)}}
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
                                onChange={(e)=>{setEmail(e.target.value)}}
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
                                onChange={(e)=>{setSubject(e.target.value)}}
                                name='subject' 
                                className="inputField"
                                placeholder='Area of your interest'
                            />
                        </formGroup>
                        <formGroup className="inputMess">
                            <label htmlFor='message' className='inputLabel'>
                                Message
                            </label>
                            <input 
                                type='text'
                                onChange={(e)=>{setMessage(e.target.value)}}
                                name='message'
                                className="inputField2"
                                maxLength={250}
                                placeholder='Type your questions. You have 250 characters'
                            />
                        </formGroup>
                        <div className='justify-start items-center pt-1'>
                            <button
                                type='submit'
                                className='btn px-5'
                                onClick={(e)=>{handleSubmit(e)}}
                            >
                                Submit
                            </button>
                        </div>
                        <div className='flex justify-end items-center pt-2 space-x-2'>
                            <a
                                href="https://www.linkedin.com/in/luciana-pilar-sanchez-5b2804134/"
                                target="_blank"
                                className="btn"
                            >
                                Contact by Linkedin
                            </a>
                            <a
                                href="https://walink.co/75bd0d"
                                target="_blank"
                                className="btn"
                            >
                                Contact by Whatsapp
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default contact