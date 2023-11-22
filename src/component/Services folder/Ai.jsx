import { FaArrowCircleRight } from 'react-icons/fa'
import ai from '../../assets/servicees/ai.svg'

const data = [
  { title: 'AI chatbot development' },
  { title: 'Recommendation systems' },
  { title: 'AI-Powered Business Automations' },
  { title: 'Predictive Analysis' },
  { title: 'AI Integration & Consulting' },
  { title: 'Data Analytics & Insights' },
  { title: 'Virtual Assistants' },
  { title: 'Computer Vision' },
  { title: 'Natural Language Processing (NLP)' },
  { title: 'Machine Learning solutions' },
]

const Ai = () => {
  return (
    <>
      <section id='ai' className='mt-20'>
        <div className='md:grid flex flex-col-reverse items-center md:grid-cols-2 gap-10'>
          <div className='text-center md:text-left'>
            <h1 className='text-3xl mb-7 font-bold text-slate-800 '>
              AI Application
            </h1>
            <p className='text-gray-500 text-4xl '>
              Innovate, Create, Iterate: Explore AI development possibilities
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
            <img src={ai} alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Ai
