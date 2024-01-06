import {
  Blogs,
  Contacts,
  Home,
  Navbar,
  Portfolio,
  About,
  Footer,
} from './components';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Blogs />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
