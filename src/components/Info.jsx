import gridImage1 from '../assets/desktop/image-grid-1.jpg'
import gridImage2 from '../assets/desktop/image-grid-2.jpg'
import gridImage3 from '../assets/desktop/image-grid-3.jpg'

export default function Info(){
  return(
    <div className='w-[1439px] mt-[22px]'>
      <div className="grid grid-cols-5 grid-rows-2 gap-[30px] mx-[164px]">
        <div className='w-[309px] text-left font-light place-items-start col-span-2 place-self-end'>
          <p className='cxHeading text-[70px]'>YOUR DAY AT <br/>THE GALLERY</p>
          <p className='text-[22px]'>
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
        <div className='col-span-3 place-self-end'>
          <img src={gridImage1} alt='picters' /></div>
        <div className='row-start-2 col-span-3'>
          <img src={gridImage2} alt='more pciters'/>
        </div>
        <div className='col-span-2'>
          <img src={gridImage3} alt='more pciters again' />
          <div className='text-[#ffffff] bg-[#151515]'>
            <p>
              Come &amp; be inspired
              We’re excited to welcome you to our gallery and see how our collections
              influence you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}