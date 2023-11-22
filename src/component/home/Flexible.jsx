import flexible from '../../assets/home/flexible.svg'
const Flexible = () => {
  return (
    <div className='my-40'>
      <div className='grid md:grid-cols-2 md:gap-10 items-center'>
        <div className='text-left my-20'>
          <button className='text-[#3DB54A] text-sm rounded-full px-4 bg-white py-1 shadow'>
            Path to excellence
          </button>
          <p className='text-slate-800 mt-4 md:text-5xl text-xl font-bold'>
            Simple & Easy ways to get started, Choose the one as you like
          </p>
          <div className='before:w-[500px] before:h-[300px] before:absolute before:left-36 mt-7 before:bg-pink-100 before:rounded-xl relative before:-z-10 before:-top-20'>
            <img src={flexible} alt='' className='mx-auto rounded-xl' />
          </div>
        </div>
        <div className='md:ml-16 '>
          <div className='flex shadow-md p-4 rounded-xl gap-4 items-start my-7 '>
            <span className='md:w-[100px] w-[70px] h-[42px] rounded-full shadow bg-gradient-to-b  from-teal-200 to-teal-500'></span>
            <div>
              <h1 className='capitalize text-xl text-slate-800 font-semibold'>
                on-demand
              </h1>

              <div className='text-gray-500'>
                <p className='text-sm my-4'>
                  Pay-as-you-go pricing based on the scope and duration of our
                  engagement.
                </p>
                <p className='text-sm '>
                  On-demand access to our team of expert IT consultants for
                  development, immediate problem-solving and strategic guidance.
                </p>
              </div>
            </div>
          </div>

          <div className='flex shadow-md p-3 rounded-xl gap-4 items-start my-7 '>
            <span className='md:w-[80px] w-[60px] h-[42px] rounded-full shadow bg-gradient-to-b  from-orange-200 to-orange-500'></span>
            <div>
              <h1 className='capitalize text-xl text-slate-800 font-semibold'>
                Project-Based Collaboration
              </h1>

              <div className='text-gray-500'>
                <p className='text-sm my-4'>
                  Fixed pricing based on project scope and deliverables with
                  defined timelines and milestones.
                </p>
                <p className='text-sm '>
                  Dedicated project team focused on delivering high-quality
                  results within agreed-upon timelines.
                </p>
              </div>
            </div>
          </div>
          <div className='flex shadow-md p-3  rounded-xl gap-4 items-start my-7 '>
            <span className='md:w-[80px] w-[60px] h-[42px] rounded-full shadow bg-gradient-to-b  from-pink-200 to-pink-500'></span>
            <div>
              <h1 className='capitalize text-xl text-slate-800 font-semibold'>
                Time and Material
              </h1>

              <div className='text-gray-500'>
                <p className='text-sm my-4'>
                  No more wondering what we’re doing or when your app will be
                  done.
                </p>
                <p className='text-sm '>
                  With us, you can expect frequent check-ins, progress updates,
                  and plenty of handholding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flexible