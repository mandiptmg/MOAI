import word2 from '../assets/word2.svg'
import cube from '../assets/cube.svg'
import about from '../assets/about.svg'
import img from '../assets/img.svg'



import { FaArrowCircleRight } from 'react-icons/fa'
const Career = () => {
  return (
    <div className='mt-20'>
      <div className='md:flex justify-between items-center '>
        <div>
          <button className='text-red-500 text-xs bg-slate-100 mb-5 inline-block px-3 py-1 rounded-full shadow-md'>
            Contact Us
          </button>
          <img src={word2} className='w-[400px]' alt='' />
          <p className='text-sm text-gray-500 mt-4'>
            Let's connect and explore opportunities together
          </p>
          <button className='rounded-full mt-4 flex gap-2 items-center hover:bg-slate-700 hover:scale-105 px-3 py-2 bg-black text-white'>
            Let's Talk
            <FaArrowCircleRight />
          </button>
        </div>
        <div className='mt-7'>
          <img src={cube} className='md:w-[350px]' alt='' />
        </div>
      </div>
      <div className='my-40 grid md:grid-cols-2 items-center'>
        <div>
          <img src={about} alt='' className='w-[400px] mb-7 ' />
        </div>
        <div className=' md:ml-10 text-left '>
          <h1 className='capitalize font-bold mb-4 text-[#1D1A4E] text-lg'>
            about us
          </h1>
          <p className='text-base'>
            Discover a workplace at a Moai that values innovation, encourages
            your growth and prioritize your well being. Join us be part of a
            team that values your future and your unique contributions.
          </p>
        </div>
      </div>
      <div className='my-16 text-center'>
        <button className='text-xs text-red-500 bg-slate-50   rounded-full shadow px-4 py-2'>
          Join Moai to be part of Transformation{' '}
        </button>
        <p className='md:text-5xl text-3xl font-bold text-slate-800 mb-6 mt-2 '>
          A world of opportunities awaits you with us
        </p>
        <img src={img} alt='' className='w-full h-full' />
      </div>
      
      <div className='mt-36 mb-20 bg-gradient-to-r from-[#333] to-[#111] flex justify-between rounded-xl p-6  items-center'>
        <div>
          <h1 className=' md:text-5xl capitalize text-lg  text-white  mb-2'>
            your career, our passion
          </h1>
          <p className='text-[0.60rem] text-white md:text-sm'>
            Let’s explore, innovate and grow together
          </p>
        </div>
        <div>
          <button className='text-xs md:text-base rounded-full border mt-4 flex gap-2 items-center px-3 py-2 bg-white text-gray-600'>
            View Jobs
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
      <div className='text-center'>
        <p className='sm'>
          Send your Resume/CV to{' '}
          <span className='text-cyan-400'>
            <a href='####'>hello@moaiconsulting.co.in</a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default Career