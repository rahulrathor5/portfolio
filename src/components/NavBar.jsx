import React, { useState } from 'react'
import{ FaBars,FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"
// import Home from './Home';
// import About from './About';

export const NavBar = () => {
    const [nav,setnav]=useState(false);

    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20
    text-white bg-black px-4 fixed py-2'>
        <div>
            <h1 className='text-5xl ml-2'>Rahul</h1>
        </div>    

        <ul className='hidden md:flex'>

           {links.map(({id,link})=>(
            <li  key={id} className='px-4 cursor-pointer capitalize font-medium
                text-gray-500 hover:scale-105 duration-200'>
                    <Link to={link} smooth duration={500}>{link}</Link>

                </li>
           ))}
        </ul>
        <div  onClick={()=>setnav(!nav)}className='cursor-pointer text-gray-500 pr-4 z-10 md:hidden'>
           {nav?<FaTimes size={25}/>:<FaBars size={25}/>}
        </div>

       {nav&&( <ul className='flex flex-col justify-center items-center 
         absolute top-0 left-0 w-full h-screen bg-gradient-to-b
         from-black to-gray-800 text-gray-500'>
 {links.map(({id,link})=>(
            <li  key={id} className='px-4  py-5 cursor-pointer capitalize text-4xl'>
             <Link  onClick={()=>setnav(!nav)}to={link} smooth duration={500}>{link}</Link>
                </li>
           ))}
         </ul>

       )}
        
        
        </div>
  )
}
