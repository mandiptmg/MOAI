//import image
import service from '../assets/servicees/service.svg'
import mouse from '../assets/mouse.svg'
import happen from '../assets/servicees/happen.svg'
import social from '../assets/social.svg'

//import services
import Mobile from './Services folder/Mobile'
import Web from './Services folder/Web'
import Ux from './Services folder/Ux'
import Ai from './Services folder/Ai'
import Security from './Services folder/Security'
import IOT from './Services folder/IOT'
import Card from './Services folder/Card'
import Cards from './Services folder/Cards'


//import icons
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
const Service = () => {
  return (
    <div id='services' className='my-20'>
      <div
        className='before:absolute before:w-full before:h-[130vh] 
        
        before:top-0 before:-z-10 before:left-0'
      >
        <div className='justify-between items-center md:flex '>
          <div>
            <button className='text-red-500 text-xs  bg-slate-100 mb-5 inline-block px-3 py-1 rounded-full shadow'>
              Moai Services
            </button>
            <img src={happen} className='w-[400px]' alt='' />
            <p className='text-sm text-gray-500 mt-4'>
              Let's connect and explore opportunities together
            </p>
            <button className='rounded-full mt-4 flex gap-2 items-center hover:bg-slate-700 hover:scale-105 px-3 py-2 bg-black text-white'>
              Let's Talk
              <FaArrowCircleRight />
            </button>
          </div>
          <div className='mt-7'>
            <img src={service} className='w-full h-full' />
          </div>
        </div>
        <div className='text-center mt-10'>
          <h4 className='text-xs text-gray-400'>Scroll for more</h4>

          <button className='relative'>
            <img src={mouse} alt='mouse' className='w-4 mt-3 ' />
            <span className=' absolute w-[1px] top-4  left-2 h-2 bg-red-500'></span>
          </button>
        </div>
      </div>
      <div className='my-40 text-center'>
        <button className='text-yellow-500 text-sm rounded-full px-4 bg-white py-1 shadow'>
          Client Testimonials
        </button>
        <p className='text-slate-800 mt-4 md:text-5xl text-xl font-bold'>
          Voices that prove our excellence
        </p>
        <div className='flex justify-between gap-x-5 md:gap-x-20 items-center'>
          <button>
            <FaArrowCircleLeft className='text-3xl text-gray-400 rounded-full border-white border' />
          </button>
          <p className='md:text-[29px] leading-none text-base font-semibold my-4 text-slate-800'>
            “ Highly recommended! The content suggestions provided are spot-on
            and improved our social media engagement.
          </p>
          <button>
            <FaArrowCircleRight className='text-3xl text-gray-400 rounded-full border-white border' />
          </button>
        </div>
        <div className='mt-10'>
          <img src={social} alt='' className='w-[400px] mx-auto h-full' />
        </div>
      </div>
      <div className='text-center my-20'>
        <button className='text-green-500 text-sm rounded-full px-4 bg-white py-1 shadow'>
          Experience the difference
        </button>
        <p className='text-slate-800 mt-4 md:text-5xl text-xl font-bold'>
          Your IT journey, powered by our services is destined for success and
          sustainability
        </p>
      </div>
      <div>
        <Mobile />
      </div>
      <div>
        <Web />
      </div>
      <div>
        <Ux />
      </div>
      <div>
        <Security />
      </div>
      <div>
        <IOT />
      </div>
      <div>
        <Ai />
      </div>
      <div className='text-center my-20'>
        <button className='text-yellow-500 text-sm rounded-full px-4 bg-white py-1 shadow'>
          Success Stories
        </button>
        <p className='text-slate-800 mt-4 md:text-5xl text-xl font-bold'>
          Witness the remarkable solutions reflecting our commitment to
          innovation.
        </p>
      </div>
      <div>
        <Card />
      </div>
      <div className='text-center my-20'>
        <button className='text-yellow-500 text-sm rounded-full px-4 bg-white py-1 shadow'>
          Range of Services
        </button>
        <p className='text-slate-800 mx-auto max-w-xl mt-4 md:text-5xl text-xl font-bold'>
          Full spectrum of services, for all your needs.
        </p>
      </div>
      <div>
        <Cards />
      </div>
      <div className='mt-36 mb-20 bg-gradient-to-r from-[#333] to-[#111] flex justify-between rounded-xl p-6  items-center'>
        <div>
          <h1 className=' md:text-5xl capitalize text-lg  text-white  mb-2'>
            Book a free consultation
          </h1>
          <p className='text-[0.60rem] text-white md:text-sm'>
            Need a Guidance? Now is the time to Talk to our Consultant.
          </p>
        </div>
        <div>
          <button className='text-xs md:text-base rounded-full border mt-4 flex gap-2 items-center px-3 py-2 bg-white text-gray-600'>
            View Jobs
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Service
