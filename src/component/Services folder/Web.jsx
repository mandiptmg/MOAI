import web from '../../assets/servicees/web.svg'
import { FaArrowCircleRight } from 'react-icons/fa'

  
const data = [
  { titel: 'Front-End Development' },
  { titel: 'Back-End Development' },
  { titel: 'Full-Stack Development' },
  { titel: 'UI-UX Design' },
  { titel: 'Custom Web Application Development' },
  { titel: 'E-Commerce Development' },
  { titel: 'CMS Development' },
  { titel: 'Enterprise Application Development' },
]
const Web = () => {
  return (
    <>
      <section id='web' className='mt-20'>
        <div className='md:grid flex flex-col-reverse items-center md:grid-cols-2 gap-10'>
          <div className='text-center md:text-left'>
            <h1 className='text-3xl mb-7 font-bold text-slate-800 '>
              Web App Development
            </h1>
            <p className='text-gray-500 text-4xl '>
              With Moai, you can bring ideas to life in the digital world
            </p>
            <div className='mt-7 justify-center md:justify-start flex flex-wrap gap-4'>
              {data.map((item) => {
                return (
                  <button className='rounded-full hover:bg-gray-100 text-xs shadow px-3 capitalize py-2 border'>
                    {item.titel}
                  </button>
                )
              })}
            </div>
            <div className='grid md:place-items-start place-items-center'>
              <button className='text-base flex gap-2 items-center text-white bg-black  rounded-full px-3 py-1 mt-10 hover:bg-slate-900 '>
                Learn more <FaArrowCircleRight className='text-xs' />
              </button>
            </div>
          </div>
          <div>
            <img src={web} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Web