import mobileGridImage1 from '../assets/mobile/image-grid-1.jpg';
import mobileGridImage2 from '../assets/mobile/image-grid-2.jpg';
import mobileGridImage3 from '../assets/mobile/image-grid-3.jpg';

export default function MobileInfo() {
  return (
    <div>
      <img src={mobileGridImage1} alt='gallery space, geometric art on display'/>
      <img src={mobileGridImage2} alt='a view of a painting of an arch'/>
      <img src={mobileGridImage3} alt='patrons enjoying the gallery'/>
    </div>
  )
}