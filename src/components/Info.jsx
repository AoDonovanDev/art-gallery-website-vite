import gridImage1 from '../assets/desktop/image-grid-1.jpg'
import gridImage2 from '../assets/desktop/image-grid-2.jpg'
import gridImage3 from '../assets/desktop/image-grid-3.jpg'

export default function Info(){
  return(
    <div className='w-[1439px] min-h-[1200px] mt-[92px]'>
      <div className="grid grid-cols-5 grid-rows-2 gap-[30px] mx-[167px] h-[1000px]">
        <div className='flex flex-col w-[309px] text-left font-light place-items-start col-span-2 justify-self-start gap-[32px] pt-[100px] relative top-[42px]'>
          <p className='cxHeading text-[60px] font-[900] leading-none tracking-normal' >YOUR DAY AT <br/>THE GALLERY</p>
          <p className='text-[22px]'>
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
        <div className='col-span-3 place-self-end max-h-[400px] relative left-[4px]'>
          <img src={gridImage1} alt='gallery space, geometric art on display'/>
        </div>
        <div className='row-start-2 col-span-3'>
          <img src={gridImage2} alt='a view of a painting of an arch'/>
        </div>
        <div className='col-span-2 flex flex-col gap-y-[30px]'>
          <img src={gridImage3} alt='patrons enjoying the gallery' className='min-h-[312px] min-w-[443px] relative left-[-15px]'/>
          <div className='flex flex-col text-[#ffffff] bg-[#151515] gap-y-[32px] min-h-[376px] pl-[50px] min-w-[443px] relative left-[-15px]'>
            <p className='cxHeading text-[60px] text-[#ffffff] font-[900] leading-none pt-[66px]'>
              COME &amp; BE INSPIRED
            </p>
            <p className='text-[22px] font-[200]'>
              We’re excited to welcome you to our gallery and see how our collections
              influence you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}