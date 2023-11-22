import landing2 from '../assets/landing2.svg'
import hello from '../assets/hello.svg'
import { FaArrowCircleRight } from 'react-icons/fa'
import SignIn from './contact/SignIn'
import Office from './contact/Office'

const Contact = () => {
  return (
    <div className='mt-20'>
      <div className='justify-between md:flex-row flex-col-reverse flex items-center '>
        <div>
          <button className='text-red-500 text-xs bg-slate-100 mb-5 inline-block px-3 py-1 rounded-full shadow'>
            Contact Us
          </button>
          <img src={landing2} className='w-[400px]' alt='' />
          <p className='text-sm text-gray-500 mt-4'>
            Let's connect and explore opportunities together
          </p>
          <button className='rounded-full mt-4 flex gap-2 items-center hover:bg-slate-700 hover:scale-105 px-3 py-2 bg-black text-white'>
            Let's Talk
            <FaArrowCircleRight />
          </button>
        </div>
        <div>
          <img src={hello} className='w-[400px]' alt='' />
        </div>
      </div>
      <div className='my-32 md:flex justify-between items-center'>
       <div><Office/></div>
       <div><SignIn/></div>
      </div>
    </div>
  )
}

export default Contact