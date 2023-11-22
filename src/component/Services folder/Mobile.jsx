import { FaArrowCircleRight } from 'react-icons/fa'
import mobile from '../../assets/servicees/mobile.svg'
const data = [
  { title: 'Application strategy and planning' },
  { title: 'UI-UX Design' },
  { title: 'Native App Development' },
  { title: 'Cross-Platform App Development' },
  { title: 'Maintenance & Support' },
  { title: 'Security & Compliance' },
]
const Mobile = () => {
  return (
    <>
      <section id='mobile' className='mt-20'>
        <div className='grid items-center md:grid-cols-2 gap-10'>
          <div>
            <img src={mobile} alt='' />
          </div>
          <div className='text-center md:text-left'>
            <h1 className='text-3xl mb-7 font-bold text-slate-800 '>
              Mobile Apps Development
            </h1>
            <p className='text-gray-500 text-4xl '>
              We don’t just code, we create experiences you can bet on
            </p>
            <div className='mt-7 justify-center md:justify-start flex flex-wrap gap-4'>
              {data.map((item) => {
                return (
                  <button className='rounded-full hover:bg-gray-100 text-xs shadow px-3 capitalize py-2 border'>
                    {item.title}
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
        </div>
      </section>
    </>
  )
}

export default Mobile
