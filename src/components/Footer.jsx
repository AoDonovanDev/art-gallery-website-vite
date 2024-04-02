import fbIcon from '../assets/icon-facebook.svg';
import instaIcon from '../assets/icon-instagram.svg';
import twitIcon from '../assets/icon-twitter.svg';

export default function Footer() {
  return (
    <div className="flex justify-self-end h-[240px] w-[1439px] bg-[#151515] text-[#ffffff] mt-[180px] items-center justify-around">
      <div className="flex justify-between w-1/2">
        <p className="text-[30px] leading-none font-[800] cxHeading">MODERN<br/> ART GALLERY</p>
        <p className="font-[200] relative left-[-50px]">
          The Modern Art Gallery is free to all visitors and open <br/> seven days a week
          from 8am to 9pm. Find us at 99<br/> King Street, Newport, USA.
        </p>
      </div>
      <div className="flex justify-between w-[100px]">
        <img src={fbIcon} alt="facebook icon. click to visit facebook" />
        <img src={instaIcon} alt="instagram icon, click to visit instagram" />
        <img src={twitIcon} alt="twitter icon, click to visit twitter" />
      </div>
    </div>
    )
}