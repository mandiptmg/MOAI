import { FaArrowCircleRight } from 'react-icons/fa'
import security from '../../assets/servicees/security.svg'

const data = [
  { title: 'DevSecOps Implementation' },
  { title: 'Dynamic Vulnerability Assessments' },
  { title: 'Security Code review' },
  { title: 'Threat Modelling' },
  { title: 'Software Composition Analysis' },
  { title: 'Security Operations Center' },
  { title: 'Red team activity' },
  { title: 'Cloud Security' },
  { title: 'Configuration Audits' },
  { title: 'Penetrations Testing' },
]
const Security = () => {
  return (
    <>
      <section id='security' className='mt-20'>
        <div className='md:grid flex flex-col-reverse items-center md:grid-cols-2 gap-10'>
          <div className='text-center md:text-left'>
            <h1 className='text-3xl mb-7 font-bold text-slate-800 '>
              Security Services
            </h1>
            <p className='text-gray-500 text-4xl '>
              Safety first, always: Explore our tech security solutions.
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
          <div>
            <img src={security} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Security
