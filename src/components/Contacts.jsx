import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contacts() {
  return (
    <div className='flex bg-slate-900 h-screen'>
      <section className='w-1/2 p-3 flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center flex-col'>
          <p className='text-yellow-400 text-3xl p-5'>Get in touch</p>
          <p className='text-slate-300 text-lg'>
            This form may not work but I can create one for you
          </p>
          <p className='text-slate-300 text-lg'>
            If you have any question please reach out to me on the following
            handles
          </p>
          <div className='flex gap-3 p-2'>
            <FontAwesomeIcon
              icon={faEnvelope}
              className='h-7 w-8 text-slate-300'
            ></FontAwesomeIcon>
            <p className='text-slate-300 text-lg'>mazumdarsumit3@gmail.com</p>
          </div>
        </div>
      </section>
      <section className='w-1/2 flex flex-col justify-center items-center'>
        <div>
          <div>
            <p className='text-yellow-400 text-3xl pb'>Contact form</p>
            <form action='#'>
              <div className='flex gap-5'>
                <div>
                  <label htmlFor='first-name' className='text-slate-300'>
                    First name
                  </label>
                  <div>
                    <input
                      type='text'
                      placeholder='First name'
                      className='p-1 rounded-md'
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='last-name' className='text-slate-300'>
                    Last name
                  </label>
                  <div>
                    <input
                      type='text'
                      placeholder='Last Name'
                      className='p-1 rounded-md'
                    />
                  </div>
                </div>
              </div>
              <div className='flex flex-col'>
                <br />
                <label htmlFor='email' className='text-slate-300'>
                  Email
                </label>
                <input
                  type='text'
                  placeholder='abc@xyz.com'
                  className='p-1 rounded-md w-full'
                />
              </div>
              <br />
              <div className='flex flex-col gap-1'>
                <label htmlFor='message' className='text-slate-300'>
                  Message
                </label>
                <input
                  type='text'
                  placeholder='Enter your queries'
                  className='p-1 pl-10 rounded-md h-20 w-full'
                />
              </div>
            </form>
            <div className='pt-4'>
              <button className='h-10 text-slate-300 rounded-3xl bg-sky-500 hover:bg-blue-500 w-20'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
