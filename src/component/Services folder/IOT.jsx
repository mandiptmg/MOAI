import { FaArrowCircleRight } from 'react-icons/fa'
import iot from '../../assets/servicees/iot.svg'

const data = [
  { title: 'Embedded systems Development' },
  { title: 'IoT device development & integration' },
  { title: 'Hardware & software prototyping' },
  { title: 'Real-time application development' },
  { title: 'Connectivity and Communication solutions' },
  { title: 'Remote monitoring and control' },
  { title: 'Security and Data privacy' },
  { title: 'Cloud-Based Data management' },
]
const IOT = () => {
  return (
    <>
      <section id='iot' className='mt-20'>
        <div className='grid items-center md:grid-cols-2 gap-10'>
          <div>
            <img src={iot} alt='' />
          </div>
          <div className='text-center md:text-left'>
            <h1 className='text-3xl mb-7 font-bold text-slate-800 '>
              IoT & Embedded
            </h1>
            <p className='text-gray-500 text-4xl '>
              IoT excellence, embedded in every solution
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

export default IOT
