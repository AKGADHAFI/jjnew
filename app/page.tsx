import Banner from './components/Banner/index';
import Features from './components/Work/index';
import Cook from './components/Cook/index';
import Expert from './components/Expert/index';
import Gallery from './components/Gallery/index';
import Contact from './components/Contact/index';


//https://jjblackforest.vercel.app/
export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      {/* <Cook /> */}
      {/* <Expert /> */}
      <Gallery />
      <Contact/>
    </>
  )
  
}
