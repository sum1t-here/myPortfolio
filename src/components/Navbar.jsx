import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/sm.webp';

function Navbar() {
  return (
    <header className='w-full relative md:w-full'>
      <nav className=' bg-cover-image bg-indigo-300 h-14 flex w-full sm:w-3/4 md:w-full lg:w-full mx-auto fixed'>
        <div className='logo sm:w-40'>
          <Link to='/'>
            <img
              className='h-9 w-9 mt-2.5 ml-3 lg:h-10 lg:w-11 border-r-1 min-w-5'
              src={logo}
              alt='logo'
            />
          </Link>
        </div>
        <div className='flex items-center lg:w-full sm:w-10'>
          <ul className='flex flex-row mx-11 mt-2 space-x-4 text-blue-800 text-xs lg:text-lg lg:ml-auto lg:mb-5'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>{' '}
            </li>
            <li>
              <NavLink to='/portfolio'>Portfolio</NavLink>{' '}
            </li>
            <li>
              <NavLink to='/blogs'>Blogs</NavLink>{' '}
            </li>
            <li>
              <NavLink to='/contacts'>Contacts</NavLink>{' '}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
