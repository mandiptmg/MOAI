import { NavLink } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../../context/contex'
// import { useEffect } from 'react'
const Menu = () => {
  const {menu,setMenu } = useGlobalContext()
  // useEffect(()=>{
  //   const handleResize = () => {
  //     if (window.innerWidth >= 620) {
  //       setMenu(false)
  //     } else {
  //       setMenu(false)
  //     }
  //   }
  //   // Initial check on mount
  //   handleResize()
  // },[])
  return (
    <div className=''>
      <div className='fixed pt-4 top-0 left-0 bg-white w-full h-full'>
        <button
          onClick={() => setMenu(false)}
          className='absolute top-6 right-16'
        >
          <FaTimes className='text-3xl ' />
        </button>
        <nav className='text-3xl  mt-12 font-bold capitalize  '>
          <ul
            onClick={() => setMenu(false)}
            className='grid gap-y-5 text-slate-800 ml-8'
          >
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/services'>services</NavLink>
              <ul className='text-base grid gap-y-3 mt-4 font-normal text-gray-700 cursor-pointer'>
                <li>
                  <a href='#mobile'>Mobile Application Development</a>
                </li>
                <li>
                  <a href='#web'>Web Application Development</a>
                </li>

                <li>
                  <a href='#ux'>UX UI Design</a>
                </li>
                <li><a href="#security">Security Services</a></li>
                <li><a href="#iot">IOT & Embedded</a></li>
                <li>
                  <a href='#ai'>AI Application Development</a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to='/about'>about</NavLink>
            </li>
            <li>
              <NavLink to='/career'>career</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>contact us</NavLink>
            </li>
          </ul>
        </nav>
        <div className='grid w-[85vw] mt-10 mx-auto'>
          <button className='rounded-full px-3  py-2 bg-black text-white'>
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default Menu
