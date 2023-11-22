import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { HiMiniBars2 } from 'react-icons/hi2'
import Menu from './Menu'
import { IoIosArrowDown } from 'react-icons/io'
import { useGlobalContext } from '../../context/contex'
const Header = () => {
  const { menu, setMenu, active, setActive } = useGlobalContext()
  return (
    <div>
      <header className='flex bg-white mt-4 rounded-full px-3 py-2 justify-between items-center'>
        <div>
          <NavLink to='/'>
            <img src={logo} alt='moai' className='w-16' />
          </NavLink>
        </div>
        <nav className='hidden md:block'>
          <ul className='flex gap-4 capitalize item-center'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className='relative'>
              <div className='flex gap-2 items-center '>
                <NavLink to='/services'>services </NavLink>
                <button>
                  <IoIosArrowDown onClick={() => setActive(true)} />
                </button>
              </div>
              <ul
                onMouseLeave={() => setActive(false)}
                className={
                  active
                    ? 'block absolute grid grid-cols-2 top-7 w-80 rounded-lg bg-gray-400 text-white p-4 gap-4 text-sm -left-16'
                    : 'hidden'
                }
              >
                <li>
                  <a href='#mobile'> Mobile Application Development </a>
                </li>
                <li>
                  <a href='#web'>Web Application Development</a>
                </li>

                <li>
                  <a href='#ux'>UX UI Design</a>
                </li>
                <li>
                  <a href='#security'>Security Services</a>
                </li>
                <li>
                  <a href='#iot'>IOT & Embedded</a>
                </li>
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
        <button className='hidden md:block rounded-full px-3 py-2 bg-black text-white'>
          Get a Quote
        </button>
        <button onClick={() => setMenu(!menu)} className='md:hidden'>
          <HiMiniBars2 className='text-2xl' />
        </button>
      </header>
      <div className={menu ? 'block' : 'hidden'}>
        <Menu />
      </div>
    </div>
  )
}

export default Header
