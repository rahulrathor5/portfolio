import React from 'react'

function Contact() {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800
    p-4 text-white'>
        <div className='flex flex-col justify-center  p-4 
            max-w-screen-lg w-full h-full'>
            <div  className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/ajjjkpva"
                method='POST'
                 className='flex flex-col w-full md:w-1/2 '>
                    <input
                    type="text"
                    name="name"
                    placeholder='enter your name'
                    className='p-2 bg-transparent border-2 border-gray-400 rounded-md
                    text-gray-400 focus:outline-none'
                    />
                    <input
                    type="text"
                    name="email"
                    placeholder='enter your E-mail'
                    className='p-2 bg-transparent border-2 border-gray-400 rounded-md my-4
                    text-gray-400 focus:outline-none'
                    />
                    <textarea 
                    name="message"
                    placeholder='enter your message'
                    rows="10"
                    className='p-2 bg-transparent border-2 border-gray-400 rounded-md
                    text-gray-400 focus:outline-none'>

                    </textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500
                     px-6 py-3 my-8 mx-auto rounded-md flex items-center hover:scale-110 duration-300 '>
                        Let's talk
                    </button>


                </form>
            </div>
        </div>


    </div>
  )
}

export default Contact