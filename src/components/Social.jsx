import React from 'react'
import {FaGithub,FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"


function Social() {
  // const Links=[
  //   {
  //     id:1,
  //     child:(
  //       <>
  //       Linkedin <FaLinkedin className='pr-1.5'size={35}/>
  //       </>
  //     ),
  //     style:"rounded-tr-md",
      
  //     href:""

  //   },
  //   {
  //     id:2,
  //     child:(
  //       <>
  //       GitHub <FaGithub className='pr-1.5'
  //       size={35}/>
  //       </>
  //     ),
      
  //     href:""

  //   },
  //   {
  //     id:3,
  //     child:(
  //       <>
  //       mail: <HiOutlineMail 
  //       className='pr-1.5' size={35}/>
  //       </>
  //     ),
      
  //     href:"mailto:"

  //   },
  //   {
  //     id:1,
  //     child:(
  //       <>
  //      Resume:<BsFillPersonLinesFill className='pr-1.5'size={35}/>
  //       </>
  //     ),
  //     style:"rounded-br-md",
  //     href:"resume",
  //     download:true

  //   }
  // ]
  return (
    <div className='hidden md:flex flex-col top-[35%] left-0 fixed'>
      <ul>
      <li className='flex justify-between items-center w-40 px-2 h-14
          bg-gray-500 ml-[-100px] rounded-tr-md hover:ml-[-5px] hover:rounded-md duration-300'>
        <a
        href="https://www.linkedin.com/in/rahulrathor749/"
        target="_blank"
        rel="noreferrer"
        className='flex justify-between items-center w-full text-white'
        >
        <>
        Linkedin <FaLinkedin size={35}/>
        
        </>
        </a>
      </li>
      <li className='flex justify-between items-center w-40 px-2 h-14
          bg-gray-500 ml-[-100px]  hover:ml-[-5px] hover:rounded-md duration-300'>
        <a
        href="https://github.com/rahulrathor5"
        
        className='flex justify-between items-center w-full text-white'
        target="_blank"
        rel="noreferrer"
        >
        <>
        GitHub <FaGithub size={35}/>
        
        </>
        </a>
      </li>
      <li className='flex justify-between items-center w-40 px-2 h-14
          bg-gray-500 ml-[-100px]  hover:ml-[-5px] hover:rounded-md duration-300'>
        <a
        href="mailto:2200520100140@ietlucknow.ac.in"
        target="_blank"
        rel="noreferrer"
        className='flex justify-between items-center w-full text-white'
        >
        <>
          Mail <HiOutlineMail size={35}/>
        
        </>
        </a>
      </li>
      <li className='flex justify-between items-center w-40 px-2 h-14
          bg-gray-500 ml-[-100px] rounded-br-md hover:ml-[-5px] hover:rounded-md duration-300'>
        <a
        href="resume.pdf"
        target="_blank"
        rel="noreferrer"
        className='flex justify-between items-center w-full text-white'
        download={true}
        >
        <>
        Resume <BsFillPersonLinesFill size={35}/>
        
        </>
        </a>
      </li>
      </ul>
    </div>
  )
}

export default Social