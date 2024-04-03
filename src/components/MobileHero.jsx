import heroImgUrl from "../assets/mobile/image-hero.jpg";
import arrowRight from "../assets/icon-arrow-right.svg";
import { useState } from "react";

export default function MobileHero() {

  const [active, setActive] = useState(false)

  function hoverOn(){
    setActive(true);
  }

  function hoverOff(){
    setActive(false)
  }

  return (
    <div className="grid grid-cols-1 w-full mb-[120px]">
     <img src={heroImgUrl} alt="large painting of a lady, people walking by" className="w-full"/>
     <p className="text-[60px] text-[#151515] font-[900] cxHeading leading-none mt-[39px] ml-[14px] mb-[31px]">MODERN <br/> ART GALLERY</p>
     <p className="ml-[18px] mb-[36px]">The arts in the collection of the Modern Art <br/>Gallery all started
          from a spark of <br/>inspiration. Will these pieces inspire you? <br/>Visit
          us and find out.</p>
      <div className="flex gap-0 cursor-pointer items-center text-[#ffffff] ml-[18px]" onTouchStart={hoverOn} onTouchEnd={hoverOff}>
          <button className={`flex text-[#ffffff] text-[22px] tracking-[0.2em] border-none rounded-none px-8 cxHeading py-[.882em] w-[203px] text-nowrap font-[650] ${active ? 'bg-[#d5966c]' : 'bg-[#151515]'}`}>OUR LOCATION</button>
          <div className={`ml-0 px-3 py-[9.5px] w-[57px] flex justify-center ${active ? 'bg-[#151515]' : 'bg-[#d5966c]'}`}>
            <img src={arrowRight} alt="click the button" width={22} className={`${active ?  'bg-[#151515]' : 'bg-[#d5966c]'} scale-50 stroke-current justify-self-center`}/>
          </div>
        </div>
    </div>
  )
}