import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { FaLinkedin, FaFacebook, FaTwitter, FaEbay } from 'react-icons/fa'
import { useGlobalContext } from '../../context/contex'

const Footer = () => {
  const {menu} = useGlobalContext()
  return (
    <div className={menu ? 'hidden' : 'py-20 mt-16 relative'}>
      <div className=' before:-z-10 before:left-0 before:absolute before:w-full before:h-full before:bottom-0 before:bg-pink-50    w-[75vw] mx-auto '>
        <div className='md:grid text-left md:text-center md:grid-cols-3 gap-x-10'>
          <div>
            <img src={logo} alt='' className='w-36 ' />
            <h1 className='text-xl mt-4 font-semibold'>
              Reimagining Technology{' '}
              <span className='block'>Redefining Success.</span>
            </h1>
          </div>
          <div className='flex gap-x-10 justify-between items-start'>
            <div className='mt-4'>
              <h1 className='md:text-sm text-xl font-semibold'>Company</h1>
              <ul className='text-sm text-gray-500 capitalize'>
                <li className='mt-4'>
                  <NavLink to='/about'>About </NavLink>
                </li>
                <li className='mt-4'>
                  <NavLink to='/carrer'>careers </NavLink>{' '}
                </li>
                <li className='mt-4'>
                  <NavLink to='/contact'>contact </NavLink>
                </li>
              </ul>
            </div>
            <div className='mt-4'>
              <h1 className='md:text-sm text-xl font-semibold'>Services</h1>
              <ul className='text-sm text-gray-500 capitalize'>
                <li className='mt-4'>
                  <NavLink to='#'>Mobile Apps Development </NavLink>
                </li>
                <li className='mt-4'>
                  <NavLink to='#'>Web Development </NavLink>
                </li>
                <li className='mt-4'>
                  <NavLink to='#'>UX/UI Design </NavLink>
                </li>
                <li className='mt-4'>
                  <NavLink to='#'>AI Application Design </NavLink>
                </li>
                <li className='mt-4'>
                  <NavLink to='#'>Security Services </NavLink>
                </li>
                <li className='mt-4'>
                  <NavLink to='#'>IOT & Embedded </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-4 items-center gap-8 flex md:block '>
            <h1 className='md:text-sm text-xl font-semibold'>Follow us</h1>
            <div className='flex md:mt-4 text-lg md:justify-center items-center gap-2 '>
              <button>
                <NavLink to='#'>
                  <FaLinkedin />
                </NavLink>
              </button>
              <button>
                <NavLink to='#'>
                  <FaTwitter />
                </NavLink>
              </button>
              <button>
                <NavLink to='#'>
                  <FaFacebook />
                </NavLink>
              </button>
              <button>
                <NavLink to='#'>
                  <FaEbay className='text-white bg-black rounded-full ' />
                </NavLink>
              </button>
              <button>
                <NavLink to='#'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M12 0C5.37527 0 0 5.37527 0 12C0 18.6248 5.37527 24 12 24C18.6117 24 24 18.6248 24 12C24 5.37527 18.6117 0 12 0ZM19.9262 5.53145C21.3579 7.27549 22.217 9.50107 22.243 11.9089C21.9046 11.8439 18.5206 11.154 15.1106 11.5835C15.0325 11.4143 14.9675 11.2321 14.8894 11.0499C14.6811 10.5554 14.4469 10.0477 14.2126 9.56618C17.9869 8.0304 19.705 5.81779 19.9262 5.53145ZM12 1.77007C14.603 1.77007 16.9848 2.74621 18.7939 4.34707C18.6117 4.60738 17.0629 6.67679 13.4186 8.04338C11.7397 4.95878 9.87855 2.43384 9.5922 2.04338C10.3601 1.86117 11.1671 1.77007 12 1.77007ZM7.63995 2.73319C7.91325 3.09761 9.73538 5.63558 11.4404 8.65508C6.65076 9.9306 2.42083 9.90458 1.96529 9.90458C2.62907 6.72885 4.77657 4.08676 7.63995 2.73319ZM1.74404 12.0131C1.74404 11.9089 1.74404 11.8048 1.74404 11.7007C2.18655 11.7136 7.15835 11.7787 12.2733 10.243C12.5727 10.8156 12.846 11.4013 13.1063 11.9869C12.9761 12.026 12.8329 12.0651 12.7028 12.1041C7.41865 13.8091 4.60738 18.4685 4.3731 18.859C2.7462 17.0499 1.74404 14.6421 1.74404 12.0131ZM12 22.256C9.6312 22.256 7.44469 21.449 5.71367 20.0954C5.89588 19.718 7.97827 15.7094 13.757 13.692C13.783 13.679 13.7961 13.679 13.8221 13.666C15.2668 17.4013 15.8525 20.5379 16.0087 21.436C14.7722 21.9696 13.4186 22.256 12 22.256ZM17.7136 20.4989C17.6096 19.8742 17.0629 16.8807 15.7223 13.1974C18.9371 12.6898 21.7484 13.5228 22.0998 13.6399C21.6573 16.4902 20.0173 18.9501 17.7136 20.4989Z'
                      fill='url(#paint0_linear_689_5116)'
                    />
                    <defs>
                      <linearGradient
                        id='paint0_linear_689_5116'
                        x1='12'
                        y1='0'
                        x2='12'
                        y2='24'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stop-color='#2A2E33' stop-opacity='0.62' />
                        <stop offset='1' />
                      </linearGradient>
                    </defs>
                  </svg>
                </NavLink>
              </button>
            </div>
          </div>
        </div>
        <hr className='my-10' />
        <div className='lg:flex md:grid md:grid-cols-2 md:gap-20 justify-between items-center '>
          <div className='grid  grid-cols-2  items-center'>
            <h1 className='text-xl font-semibold text-left uppercase '>
              write <span className='block text-slate-800'>us</span>
            </h1>
            <div>
              <h4 className=' text-sm text-gray-500 uppercase'>head office</h4>
              <NavLink to=''>hello@moaiconsulting.co.in</NavLink>
            </div>
          </div>
          <div className='grid my-4 md:my-0 grid-cols-2  items-center'>
            <h1 className='text-xl font-semibold text-left uppercase text-slate-800'>
              call <span className='block'>us</span>
            </h1>
            <div>
              <h4 className=' text-sm text-gray-500 uppercase'>head office</h4>
              <h5>+916304320699</h5>
            </div>
          </div>
          <div className='grid grid-cols-2  items-center'>
            <h1 className='text-xl font-semibold text-left uppercase '>
              visit <span className='block text-slate-800'>us</span>
            </h1>
            <div>
              <p className='text-sm'>
                3rd Floor, Plot No 47, Road No 76,
                <span className='block'> Film Nagar, Jubilee Hills,</span>
                <span className='block'> Hyderabad - 500 096</span>
              </p>
            </div>
          </div>
        </div>
        <hr className='my-16' />
        <div className='flex md:justify-between md:flex-row flex-col-reverse gap-y-4  text-xs items-center'>
          <p className='w-full text-base md:text-sm'>
            ©2023 - Moai Consulting LLP. All Rights Reserved.
          </p>
          <div className='flex font-semibold text-base md:text-sm w-full gap-8'>
            <button>
              <NavLink to='#'>Terms & Conditions</NavLink>
            </button>
            <button>
              <NavLink to='#'>Privacy Policy</NavLink>
            </button>
            <button>
              <NavLink to='#'>Sitemap</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
