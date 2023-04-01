import './footer.scss'
import { Facebook , Twitter, Pinterest, Instagram, Search, WhatsApp, Phone} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg'
import logo_2 from '../../assets/images/logo_2.png'
import useTimer from '../../hooks/useTimer';

import { DIV, SECTION, SPAN, P, H1, H2, A } from '../../utils/StyledComps'
import { display } from '@mui/system';
import splash_screen_png from '../../assets/imgs/splash_screen_png.png'
import { useEffect, useState } from 'react';


const Footer1 = () => {

  // const calculateTimeLeft = () => {
  //   const difference = +new Date("2023-07-25T00:00:00+01:00") - +new Date();
  //   let timeLeft = {};

  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor((difference/(1000 *60*60*24) ) ),
  //       hours: Math.floor(difference / (1000 * 60 * 60)%60),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60),
  //     };
  //   }

  //   return timeLeft;
  // };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);
  // }, [timeLeft]);

  // console.log(timeLeft)

  const { days, hours, minutes, seconds } = useTimer("2023-07-24T23:59:59");

  return (
    <footer>
      <div className='footer-top'>
        <div className='footer-top1'>
          COUNTDOWN TO THE TRADE SHOW
        </div>
        <div className='footer-top2'>
          <div className='footer-top2-item'>

            <span>{days}</span>
            <span>DAYS</span>
          </div>
          <div className='footer-top2-item'>
            <span>{hours}</span>
            <span>HOURS</span>
          </div>
          <div className='footer-top2-item'>
            <span>{minutes}</span>
            <span>MINUTES</span>
          </div>
          <div className='footer-top2-item'>
            <span>{seconds}</span>
            <span>SECONDS</span>
          </div>
        </div>
      </div>
      <div className='footer-middle1'>
        <div className='footer-middle1-cont'>
          <div className='footer-middle1-i'>
            <a 
            target="_blank" rel="noreferrer" href="tel:+2347034701104" className='footer-middle1-i1'>
              {/* <span className='footer-middle1-i1' > */}
                <span><Phone/> </span>
                <span className='not-mobile'>REQUEST</span>
                  <span className='not-mobile'>A CALL BACK</span>
              {/* </span> */}
            </a>
          </div>
          <div className='footer-middle1-i'>
            <a target="_blank" rel="noreferrer" href="https://wa.me/+234034701104" className='footer-middle1-i2'>
              <span><WhatsApp /></span>
              <span className='not-mobile'>CHAT US UP</span>
              <span className='not-mobile'>ON WHATSAPP NOW</span>
            </a>
          </div>
          {/* <div className='footer-middle1-i'>
            <div className='footer-middle1-contact-cont'>
              <span>CONTACT US</span>
              <span>info@ekaaboafrica.com</span>
              <li>
                Room 6, OYTHPD, Oyo State Tourism Board,
                Bale Shittu, Agodi Gate
              </li>
              <li>
                ICT Building, National Museum, Aleshinloye, Ibadan
              </li>
              <span>07034701104, 09129906500</span>
              <span>
                IG, FB, WA, Twitter
              </span>
            </div>
          </div> */}
          <div className='footer-middle1-i'>
            <div className='footer-middle1-i3'>

              <img src={splash_screen_png} alt= '' />
            </div>
          </div>
          <div className='footer-middle1-i fm1i-4'>
            <div className='footer-middle1-i4'>
              {/* <span>EVENT ORGANIZER:</span> */}
              <span>Geomeridien </span>
              <span>International Ltd</span>
              {/* <span>Supported By</span> */}
              {/* <span>OYSG</span> */}
            </div>
          </div>
          <div className='footer-middle1-i'>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe className='addr-if' title='address-1' id="gmap_canvas" src="https://maps.google.com/maps?q=Oyo%20State%20Tourism%20Board,%20Bale%20Shittu,%20Agodi%20Gate,%20Ibadan.&t=&z=17&ie=UTF8&iwloc=&output=embed" >
                </iframe>
                <span
                className='absolute-addr-no'>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-middle2'>
        <div className='footer-middle2-cont'>
          <span style={{textDecoration: 'underline'}}>CONTACT US</span>
          <span>info@ekaaboafrica.com</span>
          <li>
            Room 6, OYTHPD, Oyo State Tourism Board,
            Bale Shittu, Agodi Gate
          </li>
          <li>
            ICT Building, National Museum, Aleshinloye, Ibadan
          </li>
          <span>07034701104, 09129906500</span>
          <span className='icons-in-contact'>
                        <Instagram className="topLeftIcon"/>
                        <Facebook className="topLeftIcon"/>
                        <Twitter className="topLeftIcon"/>
                        <WhatsApp />
          </span>
          <span>info@ekaaboafrica.com</span>
        </div>
      </div>
      <div className='footer-bottom'>ALL RIGHTS RESERVED EKAABO 2023</div>
    </footer>
  )
}

export default Footer1