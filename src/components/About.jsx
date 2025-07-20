import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b 
    from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                    border-gray-500 '>About</p>
            </div>
        <p className='text-xl mt-20'>
          Hi! I'm a passionate and continuously learning developer with experience in JavaScript, React, Tailwind CSS, and Machine Learning, and I'm currently exploring the exciting world of Deep Learning.

I enjoy building sleek, responsive web applications using modern frontend tools like React and Tailwind, while also working on intelligent models that solve real-world problems using data.
        </p>
        <br/>
<p>
   My portfolio features projects that combine clean UI design with the power of machine learning — and now deep learning — for smarter, more dynamic solutions.

I'm always eager to learn, build, and grow as a developer and problem-solver.

</p>
      
        </div>
    </div>
  )
}

export default About