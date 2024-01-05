function Navbar() {
  return (
    <header className='bg-gray-900 h-14 w-full'>
      <nav className='flex w-full sm:w-3/4 lg:w-full mx-auto'>
        <div className='logo sm:w-40'>
          <img
            className='h-9 w-9 mt-2.5 ml-3 lg:h-10 lg:w-11 border-r-1 min-w-5'
            src='https://imgs.search.brave.com/zEbk8BX3TZUUsOPD6ZlUaxedgVJr9C7CwC_7Mt6doYo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1Mvc20tc3Vw/ZXJtYWxscy1sb2dv/LTU5QkJGQTA2QzIt/c2Vla2xvZ28uY29t/LnBuZw'
            alt='logo'
          />
        </div>
        <div className='flex items-center lg:w-full sm:w-10'>
          <ul className='flex flex-row mx-11 mt-4 space-x-5 text-slate-50 text-xs lg:text-base lg:ml-auto'>
            <li>Home</li>
            <li>Services</li>
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
