import fbIcon from '../assets/icon-facebook.svg';
import instaIcon from '../assets/icon-instagram.svg';
import twitIcon from '../assets/icon-twitter.svg';

Footer.propTypes = {
  screenWidth: Number
}

export default function Footer( { screenWidth } ) {
  return (
    <div className="flex flex-col md:flex-row justify-self-end h-[335px] md:h-[240px] w-full md:w-[1439px] bg-[#151515] text-[#ffffff] mt-[120px] md:mt-[180px] items-center justify-around">
      <div className="flex flex-col h-1/2 md:h-auto md:flex-row justify-between md:w-1/2">
        <p className="text-[30px] leading-none font-[800] ml-[30px] cxHeading">MODERN<br/> ART GALLERY</p>
        <p className=" font-[200] mx-[30px] relative md:left-[-8px]">The Modern Art Gallery is free to all visitors and open {(screenWidth > 600) && <br/>}
        seven days a week from 8am to 9pm. Find us at 99 {(screenWidth > 600) && <br/>}
        King Street, Newport, USA.
        </p>
      </div>
      <div className="flex relative justify-between w-[100px] self-start md:self-center md:top-[-16px] ml-[30px]">
        <img src={fbIcon} alt="facebook icon. click to visit facebook" />
        <img src={instaIcon} alt="instagram icon, click to visit instagram" />
        <img src={twitIcon} alt="twitter icon, click to visit twitter" />
      </div>
    </div>
    )
}