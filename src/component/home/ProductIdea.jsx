import proudct from '../../assets/home/product.svg'
import founder from '../../assets/home/founder.svg'
import scale from '../../assets/home/scale.svg'

const data = [
  {
    title: 'Product Strategy & Development',
    img: proudct,
    desc: 'At Moai, we combine our deep product management and technological expertise to build cost effective, robust and secure products.',
    color:'bg-gradient-to-br from-yellow-500 to-white'
  },
  {
    title: 'Founder Advisement Program',
    img: founder,
    desc: 'Led by experienced mentors and industry veterans, equips you with the knowledge and resources needed to make informed decisions and achieve your entrepreneurial goals.',
    color:'bg-gradient-to-br from-violet-500 to-white',
  },
  {
    title: 'Build to Scale',
    img: scale,
    desc: 'Ensures that your systems are agile, adaptable, and future-proof, allowing you to respond swiftly to market changes and seize new opportunities.',
    color:'bg-gradient-to-br from-green-500 to-white'
  },
]

const ProductIdea = () => {
  return (
    <div className='mt-44 mb-96'>
      <div className='text-center mb-16'>
        <button className='text-yellow-500 text-sm rounded-full px-4 bg-white py-1 shadow'>
          Product Idea
        </button>
        <p className='text-slate-800  mt-4 md:text-5xl text-xl font-bold'>
          Make it a reality, all you need is Moai
        </p>
      </div>
      <div className='grid md:grid-cols-3 gap-y-60 md:gap-4'>
{data.map(item=>{
 const {title,img, desc,color} = item;
 return (
   <div className='relative '>
     <img src={img} alt='' className='rounded-xl w-full'/>
     <div className={` ${color} absolute w-full  border p-4 left-0 -bottom-52 z-10  h-72 rounded-xl flex flex-col justify-between items-center `}>
       <h1 className='text-3xl text-slate-800 text-center font-semibold '>{title}</h1>
       <p className='text-xs'>{desc}</p>
     </div>
   </div>
 )
})}
      </div>
    </div>
  )
}

export default ProductIdea