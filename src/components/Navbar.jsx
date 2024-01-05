import logo from '../assets/sm.webp';

function Navbar() {
  return (
    <header className='bg-gray-900 w-full relative'>
      <nav className='bg-gray-900 h-14 flex w-full sm:w-3/4 lg:w-full mx-auto fixed'>
        <div className='logo sm:w-40'>
          <img
            className='h-9 w-9 mt-2.5 ml-3 lg:h-10 lg:w-11 border-r-1 min-w-5'
            src={logo}
            alt='logo'
          />
        </div>
        <div className='flex items-center lg:w-full sm:w-10'>
          <ul className='flex flex-row mx-11 mt-4 space-x-5 text-slate-50 text-xs lg:text-lg lg:ml-auto lg:mb-5'>
            <li>Home</li>
            <li>About me</li>
            <li>Portfolio</li>
            <li>Blogs</li>
            <li>Contacts</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
