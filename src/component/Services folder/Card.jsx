import img1 from '../../assets/servicees/img/img1.svg'
import img2 from '../../assets/servicees/img/img2.svg'
import img3 from '../../assets/servicees/img/img3.svg'

const data = [
  {
    title: 'UX review presentations',
    img: img1,
    desc: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
    type: ['UX', 'Product Design', 'Fintech'],
  },

  {
    title: 'Migrating to Linear 101',
    img: img2,
    desc: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.',
    type: ['UX', 'Next.js', 'Testing','SASS'],
  },

  {
    title: 'Building your API Stack',
    img: img3,
    desc: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
    type: ['React', 'Automotive'],
  },
]

const Card = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
      {data.map((item) => {
        const { title, desc, img,type } = item
        return (
          <div className='rounded-xl  p-4 border '>
            <div className='w-full'>
              <img src={img} alt='' className='w-full' />
            </div>
            <div className='py-6'>
              <h5 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
                {title}
              </h5>
              <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased'>
                {desc}
              </p>
            </div>
            {/* <div className='text-xs flex  gap-2'>
              <button className='px-3 py-1 border rounded-lg'>{type[0]}</button>
              <button className='px-3 py-1 border rounded-lg'>{type[1]}</button>
              <button className='px-3 py-1 border rounded-lg'>{type[2]}</button>
              <button className='px-3 py-1 border rounded-lg'>{type[3]}</button>
            </div> */}
            <div className='flex text-sm space-x-2'>
              {type.map((type, index) => (
                <button key={index} className='px-3 py-1 border rounded-lg'>
                  {type}
                </button>
              ))}
            </div>
          </div>
        )
        })}
     
    </div>
  )
}

export default Card
