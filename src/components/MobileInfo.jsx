import mobileGridImage1 from '../assets/mobile/image-grid-1.jpg';
import mobileGridImage2 from '../assets/mobile/image-grid-2.jpg';
import mobileGridImage3 from '../assets/mobile/image-grid-3.jpg';

export default function MobileInfo() {
  return (
    <div className='w-full flex flex-col items-center gap-[16px]'>
      <img src={mobileGridImage1} alt='gallery space, geometric art on display'/>
      <div className='flex flex-col text-left font-light mb-[170px] mt-[16px] self-start'>
        <p className='cxHeading text-[50px] font-[900] leading-[0.9em] ml-[16px]' >YOUR DAY <br/>AT THE GALLERY</p>
      </div>
      <img src={mobileGridImage2} alt='a view of a painting of an arch'/>
      <img src={mobileGridImage3} alt='patrons enjoying the gallery'/>
      <div className='flex flex-col text-[#ffffff] bg-[#151515] gap-y-[22px] min-h-[298px] pl-[25px] mx-[16px]'>
        <p className='cxHeading text-[50px] text-[#ffffff] font-[900] leading-none pt-[46px]'>
          COME &amp; BE INSPIRED
        </p>
        <p className='text-[18px] font-[200] ml-0 mr-[8px]'>
          We’re excited to welcome you to our gallery and see how our collections
          influence you.
        </p>
      </div>
    </div>
  )
}