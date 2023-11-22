import word from '../assets/word.svg'
import landing from '../assets/landing.svg'
import mouse from '../assets/mouse.svg'
import social from '../assets/social.svg'
import Strategy from './home/Strategy'
import Cards from './Services folder/Cards'
import Card from './Services folder/Card'
import Flexible from './home/Flexible'
import List from './home/List'
import ProductIdea from './home/ProductIdea'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Home = () => {
  return (
    <div className='mt-20'>
      <div
        className='before:absolute before:w-full before:h-[130vh] 
          before:bg-[#FDEDEC]
        before:top-0 before:-z-10 before:left-0'
      >
        <div className='justify-between items-center md:flex '>
          <div>
            <img src={word} className='w-[400px]' />
            <button className='rounded-full mt-4 flex gap-2 items-center hover:bg-slate-700 hover:scale-105 px-3 py-2 bg-black text-white'>
              Get Started
              <FaArrowCircleRight />
            </button>
          </div>
          <div className='mt-7'>
            <img src={landing} className='w-full h-full' />
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
      <div>
        <Strategy />
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
      <div>
        <Flexible />
      </div>
      <div className='mt-36 mb-20 bg-gradient-to-r from-[#333] to-[#111] flex justify-between rounded-xl p-6  items-center'>
        <div>
          <h1 className=' md:text-5xl text-xl text-white  mb-2'>
            Not sure which one is suitable
            <span className='block'>for you?</span>
          </h1>
        </div>
        <div>
          <button className='text-xs md:text-base  rounded-full border mt-4 flex gap-2 items-center px-3 py-2 bg-white text-gray-600'>
            Contact us
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
      <div className='text-left my-20'>
        <button className='text-pink-800 text-sm rounded-full px-4 bg-white py-1 shadow'>
          You need us
        </button>
        <p className='text-slate-800  mt-4 md:text-5xl text-xl font-bold'>
          Leverage fortune 500 experience,{' '}
          <span className='block'>cost-effective & customised solution.</span>
        </p>
      </div>
      <div>
        <List />
      </div>
      <div>
        <ProductIdea/>
      </div>
      <div className='text-center my-20'>
        <button className='text-green-500 text-sm rounded-full px-4 bg-white py-1 shadow'>
          Success Stories
        </button>
        <p className='text-slate-800 mt-4 md:text-5xl text-xl font-bold'>
          Delivered remarkable solutions, reflecting our commitment to
          innovation.
        </p>
      </div>
      <div>
        <Card />
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

export default Home