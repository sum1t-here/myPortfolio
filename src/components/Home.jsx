function Home() {
  return (
    <div className='bg-gray-950 h-screen w-full flex justify-center items-center lg:flex-col'>
      <div className='hero-section'>
        <p className='text-yellow-400 text-3xl lg:text-7xl'>Hello</p>
        <p className='text-white lg:text-3xl'>
          I'm <span className='text-blue-500 text-4xl lg:text-8xl'>Sumit</span>
          Mazumdar
        </p>
        <p className='text-sm text-yellow-400 lg:text-3xl'>
          Full Stack Web Devloper
        </p>
      </div>
      <button className='bg-sky-500 rounded-3xl text-xs ml-6 w-20 hover:bg-sky-700 lg:mt-8 lg:text-sm lg:w-28'>
        Download <br />
        Resume
      </button>
    </div>
  );
}

export default Home;
