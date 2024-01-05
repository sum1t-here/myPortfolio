import { Blogs, Contacts, Home, Navbar, Portfolio, About } from './components';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Blogs />
      <Contacts />
      <h1 className='text-yellow-300 bg-slate-700'>Hello World</h1>
    </div>
  );
}

export default App;
