import Hero from "@/components/Hero";
import About from "./About/page";
import Contactus from "./Contact-us/page";
import Skills from "./Skills/page";
export default function Home() {
  return (
   <div>
     <Hero/>
     <About/>
     <Skills/>

     <Contactus/>
   </div>
  );
}
