import React from 'react'
import my_img from '../assets/my_img.jpg'
import {MdKeyboardArrowRight} from "react-icons/md"
import {Link} from 'react-scroll'
import TextChange from './Textchanger'
import Portfolio from './Portfolio'

function Home() {
  return (
    <div name="home"
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
         <div className='max-w-screen-lg mx-auto flex flex-col
         items-center justify-center h-full px-4  md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl md:text-7xl text-white'
                > <TextChange/></h2>
                <p className='text-gray-500 py-4 max-w-md' >
                    I am a sofware developer and I love to work on web 
                    application using technology like
                    React, Tailwind and Next js.
                </p>
                <div>
                    <button className=' group text-white  w-fit px-6 py-3 my-2 
                    flex items-center rounded-md bg-gradient-to-r from-cyan-500 
                    to to-blue-500 cursor-pointer'>
                        <Link to="portfolio" smooth duration={500}>portfolio</Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={25}
                            className='ml-1'/>
                        </span>
                    </button>
                </div>
                
            </div>
            <div>
                    <img  className="rounded-2xl mx-auto  w-2/3 h-auto md:w-4/5"src={my_img} alt="my profile"/>
                </div>

         </div>
    </div>
  )
}

export default Home