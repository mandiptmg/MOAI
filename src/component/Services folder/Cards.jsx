import img1 from '../../assets/servicees/image/img1.svg'
import img2 from '../../assets/servicees/image/img2.svg'
import img3 from '../../assets/servicees/image/img3.svg'
import img4 from '../../assets/servicees/image/img4.svg'
import img5 from '../../assets/servicees/image/img5.svg'
import img6 from '../../assets/servicees/image/img6.svg'

import { FaArrowCircleRight } from 'react-icons/fa'


const data = [
  {
    title: 'Mobile Apps Development',
    img: img1,
    desc: "We don't just code, we create experiences you can bet on.",
  },
  {
    title: 'Web Development',
    img: img2,
    desc: 'With Moai, you can bring ideas to life in the digital world.',
  },
  {
    title: 'UX/UI Design',
    img: img3,
    desc: 'We at Moai, Elevating user experience through simplicity, empathy, and purposeful design',
  },
  {
    title: 'Security Services',
    img: img4,
    desc: 'Safety first, always: Explore our tech security solutions',
  },
  {
    title: 'IoT & Embedded',
    img: img5,
    desc: 'IoT excellence, embedded in every solution',
  },
  {
    title: 'AI Application',
    img: img6,
    desc: 'Innovate, Create, Iterate: Explore AI development possibilities',
  },
]
const Cards = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
      {data.map((item) => {
        const { title, desc, img } = item
        return (
          <div className='rounded-xl  p-4 border '>
            <div className='w-full'>
              <img src={img} alt='' className='w-full' />
            </div>
            <div className='py-6'>
              <h5 className='mb-2 block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                {title}
              </h5>
              <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
                {desc}
              </p>
            </div>
            <div>
              <button className='px-3 flex gap-4 items-center py-1 hover:border rounded-lg'>
                Learn more <FaArrowCircleRight />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cards