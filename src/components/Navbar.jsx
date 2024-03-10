import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

function Navbar() {
  return (
    <header className='w-full relative md:w-full flex flex-row ritems-center justify-center'>
      <nav className=' bg-header h-20 flex w-full sm:w-3/4 md:w-full lg:w-full mx-auto fixed'>
        <div className='logo sm:w-40'>
          <Link to='/'>
            <img src={Logo} className='h-16 w-16 mt-2' />
          </Link>
        </div>
        <div className='flex items-center lg:w-full sm:w-10'>
          <ul className='flex flex-row mx-11 mt-2 space-x-4 text-blue-800 text-xs lg:text-lg lg:ml-auto lg:mb-5'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-link' : 'text-black'
                  } font-handlee font-thin text-sm`
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/projects'
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-link' : 'text-black'
                  } font-handlee font-thin text-sm`
                }
              >
                PROJECT
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/blogs'
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-link' : 'text-black'
                  } font-handlee font-thin text-sm`
                }
              >
                BLOGS
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  `${
                    isActive ? 'text-link' : 'text-black'
                  } font-handlee font-thin text-sm`
                }
              >
                ABOUT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
