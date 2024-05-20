import About from "./About";
import Contact from "./Contact";
import HeroSession from "./HeroSession";
import Services from "./Services";
import Skills from "./Skills";
import Works from "./Works";

interface MainProps {
  nav: boolean;
  handleNav: () => void;
  closeNav: () => void;
}

export default function Main({nav, handleNav, closeNav}: MainProps) {
  return (
    <div  onClick={closeNav} className='main'>
      <HeroSession nav={nav} handleNav={handleNav} />
      <About />
      <Skills />
      <Services />
      <Works />
      <Contact />
    </div>
  )
}