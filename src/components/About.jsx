export default function About() {
  return (
    <div className='bg-slate-950 h-screen flex flex-col justify-center items-center'>
      <h1 className='text-center text-lg lg:text-4xl text-yellow-400 mb-6'>
        About Me
      </h1>
      <div className='flex w-screen justify-center items-center p-10'>
        <div className='w-1/2'>
          <p className='text-white lg:text-lg'>
            Greetings, fellow developers! I'm Sumit, a passionate MERN Stack
            developer on a mission to weave digital magic through code.
          </p>
          <br />
          <p className='text-white lg:text-lg'>
            Embarking on the endless journey of code, I've honed my skills in
            MongoDB, Express.js, React, and Node.js – the pillars of the MERN
            Stack. From concept to deployment, I'm all about crafting
            applications that not only meet functional requirements but also
            leave a lasting user experience.
          </p>
        </div>
      </div>
    </div>
  );
}
