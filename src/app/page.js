import Image from "next/image";
import SectionOne from "./Components/SectionOne";
import SectionOneB from "./Components/SectionOneB";
import SectionOneC from "./Components/SectionOneC";
import Section2A from "./Components/Section2A";
import Section3A from "./Components/Section3A";
import Section4A from "./Components/Section4A";
import Section5A from "./Components/Section5A";
import Section6A from "./Components/Section6A";
import Section7A from "./Components/Section7A";
import Section8A from "./Components/Section8A";
import Section9A from "./Components/Section9A";
Section8A

export default function Home() {
  return (
   <div >

     <div className="flex flex-col gap-y-[4rem]">
      <SectionOne/>
      <SectionOneB/>
      <SectionOneC/>
    </div>
    
    <div>
      <Section2A/>
    </div>
    
    <div>
      <Section3A/>
    </div>

    <div>
      <Section4A/>
    </div>

    <div>
      <Section5A/>
    </div>

    <div>
      <Section6A/>
    </div>

    <div>
      <Section7A/>
    </div>

    <div>
      <Section8A/>
    </div>

    <div>
      <Section9A/>
    </div>
   </div>
  );
}
