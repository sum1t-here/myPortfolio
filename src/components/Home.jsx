function Home() {
  return (
    <section className='flex flex-col justify-center items-center'>
      <div className='bg-gray-950 h-screen w-full flex flex-col lg:flex-row justify-center items-center lg:gap-8'>
        <div className='flex flex-col p-3 lg:w-1/2'>
          <div className='hero-section p-5 text-center'>
            <p className='text-yellow-400 text-3xl lg:text-7xl'>Hello</p>
            <p className='text-white lg:text-3xl'>
              I'm{' '}
              <span className='text-blue-500 text-4xl lg:text-8xl'>Sumit</span>
              Mazumdar
            </p>
            <p className='text-sm text-yellow-400 lg:text-3xl'>
              Full Stack Web Developer
            </p>
          </div>
          <button className='bg-sky-500 hover:bg-blue-600 h-10 w-25 rounded-3xl text-xs mt-4 lg:mt-8 lg:text-sm lg:w-28'>
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
