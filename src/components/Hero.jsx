import heroImgUrl from "../assets/desktop/image-hero.jpg";
import arrowRight from "../assets/icon-arrow-right.svg";

import { useState } from "react"

export default function Hero() {

  const [active, setActive] = useState(false)

  function hoverOn(){
    setActive(true);
  }

  function hoverOff(){
    setActive(false)
  }

  return (
    <div className="flex w-[1439px]">
      <div className="w-[450px] bg-[#151515] flex flex-col">
        <p className="text-[96px] font-[900] text-[#ffffff] desktop-invert relative left-[164px] top-[175px] text-left leading-none tracking-normal cxHeading" data-content="MODERN"></p>
        <div className="flex relative left-[164px] top-[274px]">
          <p className="text-[#151515] text-[#ffffff] text-[96px] font-[900] text-left leading-none cxHeading text-nowrap">ART GAL</p>
          <p className="text-[#151515] text-[96px] font-[900] cxHeading leading-none">LERY</p>
        </div>
      </div>
      <div className="w-[539px]">
        <img src={heroImgUrl} alt="large painting of a lady, people walking by" className="h-[800px]"/>
      </div>
      <div className="w-[450px] flex flex-col h-full gap-[72px]">
        <p className="w-[345px] text-left info text-[22px] mt-[190px] relative left-[-64px] font-light">
          The arts in the collection of the Modern Art Gallery all started
          from a spark of inspiration. Will these pieces inspire you? Visit
          us and find out.
        </p>
        <div className="flex gap-0 cursor-pointer items-center text-[#ffffff]" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
          <button className={`relative left-[-64px] flex text-[#ffffff] text-[22px] tracking-[0.2em] border-none rounded-none px-8 cxHeading py-[.882em] w-[203px] text-nowrap font-[650] ${active ? 'bg-[#d5966c]' : 'bg-[#151515]'}`}>OUR LOCATION</button>
          <div className={`relative left-[-64px] ml-0 px-3 py-[9.5px] w-[57px] flex justify-center ${active ? 'bg-[#151515]' : 'bg-[#d5966c]'}`}>
            <img src={arrowRight} alt="click the button" width={22} className={`${active ?  'bg-[#151515]' : 'bg-[#d5966c]'} scale-50 stroke-current justify-self-center`}/>
          </div>
        </div>
      </div>        
    </div>
    )
}