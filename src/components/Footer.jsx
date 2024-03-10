import { FaLinkedinIn } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='bg-footer border-y'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center'>
            Designed by{' '}
            <a href='https://www.sumitmazumdar.in/' className='hover:underline'>
              Sumit Mazumdar
            </a>{' '}
            &copy; {year}. All Rights Reserved.
          </span>
          <div className='flex mt-4 space-x-5 sm:justify-center sm:mt-0'>
            <a href='https://www.linkedin.com/in/sum1t-here/'>
              <FaLinkedinIn size={28} />
            </a>
            <a href='https://github.com/sum1t-here/'>
              <FaGithub size={28} />
            </a>
            <a href='https://twitter.com/sum1t_here/'>
              <FaXTwitter size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
