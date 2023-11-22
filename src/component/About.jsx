import aboutimg from '../assets/ABOUT/aboutimg.svg'
import crossing from '../assets/ABOUT/crossing.svg'
import img2 from '../assets/ABOUT/img2.svg'
import img3 from '../assets/ABOUT/img3.svg'
import img4 from '../assets/ABOUT/img-4.svg'
import mission from '../assets/ABOUT/mission.svg'
import vision from '../assets/ABOUT/vision.svg'
import word3 from '../assets/ABOUT/word3.svg'
import { FaArrowCircleRight } from 'react-icons/fa'

const data = [
  { title: 'web 3' },
  { title: 'aerospace' },
  { title: 'Automotive' },
  { title: 'BFSI' },
  { title: 'retail' },
  { title: 'healthcare' },
  { title: 'education' },
  { title: 'adtech' },
  { title: 'SASS' },
  { title: 'data management' },
  { title: 'food delivery' },
  { title: 'entertainment' },
  { title: 'cloud & infra management' },
]
const About = () => {
  return (
    <div className='mt-20'>
      <div className='md:flex  justify-between items-center '>
        <div className='md:mr-24'>
          <button className='text-red-500 text-xs bg-slate-100 mb-5 inline-block px-3 py-1 rounded-full shadow-md'>
            About Us
          </button>
          <img src={word3} className='w-[400px]' alt='' />
          <p className='text-sm text-gray-500 mt-4'>
            Together, Let’s make a difference
          </p>
          <button className='rounded-full mt-4 flex gap-2 items-center hover:bg-slate-700 hover:scale-105 px-3 py-2 bg-black text-white'>
            Let's Talk
            <FaArrowCircleRight />
          </button>
        </div>
        <div>
          <img src={aboutimg} className='md:w-[350px] mt-7' alt='' />
        </div>
      </div>
      <div className='mt-40 mb-20 md:flex justify-between items-center'>
        <div className=' md:mr-24 text-left '>
          <h1 className='capitalize font-bold mb-4 text-[#1D1A4E] text-lg'>
            vision statement
          </h1>
          <p className='text-base text-gray-500'>
            To earn the lifetime loyalty of our customers’ by consistently
            delivering the most responsive and personalized IT services in the
            industry.
          </p>
        </div>
        <div>
          <img src={vision} alt='' className='  mt-7' />
        </div>
      </div>
      <div className=' grid md:grid-cols-2 justify-between items-center'>
        <div>
          <img src={mission} alt='' className='  mb-7' />
        </div>
        <div className=' md:ml-24 text-left '>
          <h1 className='capitalize font-bold my-4 text-[#1D1A4E] text-lg'>
            mission statement
          </h1>
          <p className='text-base text-gray-500'>
            To listen, understand and deliver tailored IT solutions that surpass
            our customers’ expectations at every turn.
          </p>
        </div>
      </div>
      <div className='my-16 text-center'>
        <button className='text-xs text-red-500 bg-slate-50   rounded-full shadow-md px-4 py-2'>
          Our Values Drive Our Actions
        </button>
        <p className='md:text-5xl text-3xl font-bold text-slate-800 mb-6 mt-2 '>
          Built on Trust and Innovation
        </p>
        <img src={img2} alt='' className='w-full h-full' />
      </div>
      <div className='my-40 text-center'>
        <button className='text-xs text-green-500 bg-slate-50   rounded-full shadow-md px-4 py-2'>
          Meet Our Team
        </button>
        <p className='md:text-5xl text-3xl font-bold text-slate-800 mb-6 mt-2 '>
          Diverse Minds, One shared Mission
        </p>
        <img src={img4} alt='' className='w-full hidden md:block h-full' />
        <img src={img3} alt='' className=' md:hidden w-full h-full' />
      </div>
      <div className='grid items-center md:grid-cols-[1fr,1.5fr]'>
        <div className='mr-10'>
          <button className='text-cyan-400 px-3 py-1 rounded-full shadow-md text-xs'>
            Wealth of industry Insights
          </button>
          <p className='text-5xl font-bold mt-7 text-slate-800'>
            Crossing Boundaries, We bring expertise to every project
          </p>
          <div className='flex flex-wrap gap-1 mt-10'>
            {data.map((item) => {
              return (
                <button className='rounded-full hover:bg-gray-100 text-xs shadow px-3 capitalize py-2 border'>
                  {item.title}
                </button>
              )
            })}
          </div>
        </div>
        <div>
          <img src={crossing} alt='' className='w-full md:mt-0 mt-7 h-full ' />
        </div>
      </div>
      <div className='mt-36 mb-20 bg-gradient-to-r from-[#333] to-[#111] flex justify-between rounded-xl p-6  items-center'>
        <div>
          <p className=' md:text-5xl capitalize text-lg  text-white  mb-2'>
            Want to know us further?
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
          Drop a greeting at
          <span className='text-cyan-400'>
            <a href='####'>hello@moaiconsulting.co.in</a>
          </span>
        </p>
      </div>
    </div>
  )
}

export default About
