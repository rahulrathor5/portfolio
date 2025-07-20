import React from 'react'
import startup from '../assets/portfolio/startup.png'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installnode from "../assets/portfolio/hello.png"
import navbarx from "../assets/portfolio/whatapp.png"
import reactParallax from "../assets/portfolio/reactParallax.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"
import { MdImageSearch } from 'react-icons/md'


function Portfolio() {
  return (
    <div name="portfolio"
    className='bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-full'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={startup} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex justify-center items-center'>
                    <button
                       className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                        onClick={() => window.open('https://rahulrathor5.github.io/E-commerce/', '_blank')}>
                         Demo
                        </button>
                       <button
                          className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                          onClick={() => window.open('https://github.com/rahulrathor5/E-commerce', '_blank')}>
                            code
                         </button>
                    </div>
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={navbarx} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex justify-center items-center'>
                        <button
                       className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                        onClick={() => window.open('https://brst3slfnretgb7zlzcux2.streamlit.app/', '_blank')}>
                         Demo
                        </button>
                        <button
                       className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                        onClick={() => window.open('https://github.com/rahulrathor5/whatsapp_chat_anlyzer', '_blank')}>
                         code
                        </button>
                    </div>
                </div>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={installnode} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex justify-center items-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200
                        hover:scale-105'>Demo</button>
                         <button
                       className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                        onClick={() => window.open('https://github.com/rahulrathor5/freasher_salary_prediction', '_blank')}>
                         code    
                         </button>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Portfolio