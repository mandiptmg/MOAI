import day from '../../assets/home/day.svg'
import solution from '../../assets/home/solutions.svg'
import peace from '../../assets/home/peace.svg'

const List = () => {
  return (
    <div>
      <section className='mt-20'>
        <div className='md:grid flex flex-col-reverse items-center md:grid-cols-2 gap-10'>
          <div className='text-center mx-auto max-w-sm md:text-left'>
            <h1 className='text-xl hidden md:block mb-7 font-bold text-slate-800 '>
              We Breathe Tech Day & Night
            </h1>
            <p className='text-gray-500 text-base '>
              MOAI strives to be your partner in delivering solutions. With our
              quick turnaround and round the clock support, we would always be
              your trusted product partner.
            </p>
          </div>
          <div>
            <h1 className='text-xl md:hidden text-center mb-7 font-bold text-slate-800 '>
              We Breathe Tech Day & Night
            </h1>
            <img src={day} alt='' />
          </div>
        </div>
      </section>
      <section className='mt-20'>
        <div className='grid items-center md:grid-cols-2 gap-10'>
          <div>
            <h1 className='text-xl md:hidden text-center mb-7 font-bold text-slate-800 '>
              Customized Solutions
            </h1>
            <img src={solution} alt='' />
          </div>
          <div className='text-center  mx-auto max-w-sm md:text-left'>
            <h1 className='text-xl mb-7 hidden md:block font-bold text-slate-800 '>
              Customized Solutions
            </h1>
            <p className='text-gray-500 text-base '>
              We deliver customized solutions that align with your goals, add
              tangible value, and give you a competitive edge.
            </p>
          </div>
        </div>
      </section>
      <section className='mt-20'>
        <div className='md:grid flex flex-col-reverse items-center md:grid-cols-2 gap-10'>
          <div className='text-center mx-auto max-w-sm md:text-left'>
            <h1 className='text-xl hidden md:block mb-7 font-bold text-slate-800 '>
              Peace of mind
            </h1>
            <p className='text-gray-500 text-base '>
              No more wondering what we’re doing or when your app will be done.
              With us, you can expect frequent check-ins, progress updates, and
              plenty of hand-holding.
            </p>
          </div>
          <div>
            <h1 className='text-xl text-center md:hidden  mb-7 font-bold text-slate-800 '>
              Peace of mind
            </h1>
            <img src={peace} alt='' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default List
