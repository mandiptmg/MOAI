import { useState } from "react"

const data = [
  { title: 'Mobile Application Development' },
  { title: 'Web Application Development' },
  { title: 'AI Application Design' },
  { title: 'UX UI Design' },
  { title: 'Security Services' },
  { title: 'IoT & Embedded' },
]

const SignIn = () => {
 const [isActive, setIsActive] = useState(false)
  return (
    <div className='max-w-[520px] border rounded-3xl p-8'>
      <p className=' text-center text-[28px] font-semibold text-[#2A2E33]'>
        Having a Question or Request?
      </p>
      <p className='text-center mb-8 text-[18px] text-[#2A2E33]'>
        Share your input and we’ll be in touch shortly
      </p>
      <form className='grid gap-y-2 '>
        <div className='text-gray-500'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            className='block border-gray-500 border w-full p-2 placeholder:text-sm rounded-md'
            placeholder='Enter your name'
          />
        </div>
        <div className='flex gap-3 items-center'>
          <div className='text-gray-500 w-full'>
            <label htmlFor='number'>Number</label>
            <input
              type='number'
              className='block border-gray-500 border w-full p-2 placeholder:text-sm rounded-md'
              placeholder='Enter your Phone number'
            />
          </div>
          <div className='text-gray-500 w-full'>
            <label htmlFor='Email'>Email</label>
            <input
              type='email'
              className='block border-gray-500 border w-full placeholder:text-sm p-2 rounded-md'
              placeholder='Ex:you@mail.com'
            />
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='text-gray-500 w-full'>
            <label htmlFor='Organiztaion'>Organiztaion</label>
            <input
              type='text'
              className='block border-gray-500 border w-full p-2 placeholder:text-sm rounded-md'
              placeholder='Enter Organiztaion details'
            />
          </div>
          <div className='text-gray-500 w-full'>
            <label htmlFor='Designation'>Designation</label>
            <input
              type='text'
              className='block border-gray-500 border w-full p-2 rounded-md'
              placeholder='Enter Designation'
            />
          </div>
        </div>
        <div className='text-gray-500'>
          <label htmlFor='service'>Services</label>
          <div className='grid text-black gap-3 grid-cols-3 '>
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={() => setIsActive(!isActive)}
                    className={
                      isActive
                        ? ' border rounded-lg w-full border-black text-sm h-full text-center px-3 py-6'
                        : ' border rounded-lg  border-gray-400 w-full h-full hover:border-black  text-sm text-center px-3 py-6'
                    }
                  >
                    {item.title}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
        <div className='text-gray-500'>
          <label htmlFor='message'>Message for us</label>
          <textarea
            className='block border-gray-500 border w-full p-2 rounded-md'
            placeholder='Enter your message'
          />
        </div>
        <div>
          <p className='text-xs mb-4 text-[#2A2E33]'>
            By clicking on submit, I agree with Moai Privacy Policy{' '}
          </p>
          <button
            className='w-full text-center text-white bg-[#2A2E33] rounded-full py-2'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignIn