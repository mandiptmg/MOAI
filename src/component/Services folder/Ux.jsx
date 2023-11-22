import ux from '../../assets/servicees/ux.svg'
import { FaArrowCircleRight } from 'react-icons/fa'

const data = [
  { title: 'User Research' },
  { title: 'User Personals' },
  { title: 'Information Architecture' },
  { title: 'Wireframing' },
  { title: 'Prototyping' },
  { title: 'Visual Design' },
  { title: 'Usability testing' },
  { title: 'Responsive Design' },
  { title: 'Accessibility Design' },
  { title: 'Interaction Design' },
  { title: 'Collaboration and development' },
  { title: 'Post launch Analysis' },
]
const Ux = () => {
  return (
    <>
      <section id='ux' className='mt-20'>
        <div className='grid items-center md:grid-cols-2 gap-10'>
          <div>
            <img src={ux} alt='' />
          </div>
          <div className='text-center md:text-left'>
            <h1 className='text-3xl mb-7 font-bold text-slate-800 '>UX/UI Design</h1>
            <p className='text-gray-500 text-4xl '>
              With Moai, design experiences that inspire trust.
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

export default Ux
