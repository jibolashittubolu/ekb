import './home.scss'

import home1 from '../../assets/imgs/Ekaabo Website Layout home 1.jpg'
import home2 from '../../assets/imgs/Ekaabo Website Layout home 2.jpg'
import home3 from '../../assets/imgs/Ekaabo Website Layout home 3.jpg'
import home4 from '../../assets/imgs/Ekaabo Website Layout home 4.jpg'
import home5 from '../../assets/imgs/Ekaabo Website Layout home 5.jpg'
import home6 from '../../assets/imgs/Culture image.jpg'
import { useEffect, useState } from 'react'
import HomeSlideType1 from '../../components/reusable/homeSlideType1/HomeSlideType1'
import HomeSlideType2 from '../../components/reusable/ekbHomeComponent/EkbHomeComponent'
import { Link } from 'react-router-dom'
import { ROUTER_LINKS } from '../../utils/ROUTER_LINKS'


const Home = () => {
  const [slideNum, setSlideNum] = useState(0)

  const slides = [
    <div className='home-slide-item'>
      <img className='home-bg-img' src={home1} alt='' />
      <div className='home-slide-text-cont'>
        <div className='hstc-line1'>THE MEGA TRADE SHOW IS HERE!</div>
        <div className='hstc-line2'>EKAABO TRADE SHOW 2023</div>
        <div className='hstc-line3'>
          <Link
          className='link'
          to={ROUTER_LINKS.exhibit.exhibitors_info}>aaaEXHIBIT</Link>
          <Link className='link'
          to={ROUTER_LINKS.attend.register_to_attend}>ATTEND</Link>
          <Link className='link'
          to={ROUTER_LINKS.sponsors.be_a_sponsor}>SPONSOR</Link>
        </div>
      </div>
    </div>,
    <div className='home-slide-item'>
      <img className='home-bg-img' src={home1} alt='' />
      <div className='home-slide-text-cont'>
        <div className='hstc-line1'>HOSTPITALITY . CULTURE . TOURISM . TRADE</div>
        <div className='hstc-line2'>EKAABO TRADE SHOW 2023</div>
      </div>
    </div>,
    <HomeSlideType1 src={home3} image_position="right" heading="HOSPITALITY" text="Tourism and hospitality industry is regarded as a bedrock of any nation as it can solve various issues with ease while profering sustainable solutions to communities or states that decide to take advantage of the sector. Given the low-level skills and the relatively short-lead period for training and skills acquisition,"/>,
    <HomeSlideType1 src={home4} image_position="left"  heading="TOURISM" text="The tourism and hospitality industry in Oyo State has huge potential yet unexplored, which if fully supported by all the stakeholders, can contribute significantly to the economic diversification that will definitely lead to economic growth, reducing poverty, improving natural resource management, conserving biodiversity, employment generation, empowerment, community development, among others."/>,
    <HomeSlideType1 src={home5} image_position="right" heading="TRADE" text="The tourism and hospitality industry in Oyo State has huge potential yet unexplored, which if fully supported by all the stakeholders, can contribute signicantly to the economic diversification that will definitely lead to economic growth, reducing poverty, improving natural resource management, conserving biodiversity, employment generation, empowerment, community development, among others."/>,
    <HomeSlideType1 src={home6} image_position="left" heading="CULTURE" text="The tourism and hospitality industry in Oyo State has huge potential yet unexplored, which if fully supported by all the stakeholders, can contribute signicantly to the economic diversification that will definitely lead to economic growth, reducing poverty, improving natural resource management, conserving biodiversity, employment generation, empowerment, community development, among others."/>
    // <img className='home-bg-img' src={home2} alt='' />,
    // <img className='home-bg-img' src={home3} alt='' />,
    // <img className='home-bg-img' src={home4} alt='' />,
    // <img className='home-bg-img' src={home5} alt='' />,
    // <img className='home-bg-img' src={home6} alt='' />

    
  ]

  // console.log(slideNum, 'num')
  // console.log(slides.length, 'length')
  useEffect(
    () => {
      const changeSlideNum = () => {
        if(slideNum === slides.length-1){
          return setSlideNum(0)
        }
        return setSlideNum(prev => (prev + 1))
      }
      let timer1 = setTimeout(() => changeSlideNum(), 5000);
      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    [slideNum]
  );

  const handleSelectSlide = (slide) => {
    setSlideNum(slides.indexOf(slide))
  }
  
  return (
          <div className='home'>
            <div className='bg-img-home'>
              <div className='home-bg-img-cont'>
                {/* {slides[slideNum]} */}
                <div className='home-slide-item'>
                  <img className='home-bg-img' src={home1} alt='' />
                  <div className='home-slide-text-cont'>
                    <div className='hstc-line1'>THE MEGA TRADE SHOW IS HERE!</div>
                    <div className='hstc-line2'>EKAABO TRADE SHOW 2023</div>
                    <div className='hstc-line3'>
                      <Link
                      className='link'
                      to={ROUTER_LINKS.exhibit.exhibitors_info}>EXHIBIT</Link>
                      <Link className='link'
                      to={ROUTER_LINKS.attend.register_to_attend}>ATTEND</Link>
                      <Link className='link'
                      to={ROUTER_LINKS.sponsors.be_a_sponsor}>SPONSOR</Link>
                    </div>
                  </div>
                </div>
                <div className='home-slide-item'>
                  <img className='home-bg-img' src={home2} alt='' />
                  <div className='home-slide-text-cont'>
                    <div className='hstc-line1'>HOSPITALITY . CULTURE . TOURISM . TRADE</div>
                    <div className='hstc-line2'>EKAABO TRADE SHOW 2023</div>
                  </div>
                </div>

                <HomeSlideType1 src={home3} image_position="right" heading="HOSPITALITY" text="Tourism and hospitality industry is regarded as a bedrock of any nation as it can solve various issues with ease while profering sustainable solutions to communities or states that decide to take advantage of the sector. Given the low-level skills and the relatively short-lead period for training and skills acquisition,"/>
                <HomeSlideType1 src={home4} image_position="left"  heading="TOURISM" text="The tourism and hospitality industry in Oyo State has huge potential yet unexplored, which if fully supported by all the stakeholders, can contribute significantly to the economic diversification that will definitely lead to economic growth, reducing poverty, improving natural resource management, conserving biodiversity, employment generation, empowerment, community development, among others."/>
                <HomeSlideType1 src={home5} image_position="right" heading="TRADE" text="The tourism and hospitality industry in Oyo State has huge potential yet unexplored, which if fully supported by all the stakeholders, can contribute signicantly to the economic diversification that will definitely lead to economic growth, reducing poverty, improving natural resource management, conserving biodiversity, employment generation, empowerment, community development, among others."/>
                <HomeSlideType1 src={home6} image_position="left" heading="CULTURE" text="The tourism and hospitality industry in Oyo State has huge potential yet unexplored, which if fully supported by all the stakeholders, can contribute signicantly to the economic diversification that will definitely lead to economic growth, reducing poverty, improving natural resource management, conserving biodiversity, employment generation, empowerment, community development, among others."/>
            </div>
          </div>

      <div className='slide-dots'>
        {
        slides.map((slide, index) => (
          <div 
          key={index} 
          className='slide-dot-container' 
          onClick={()=>handleSelectSlide(slide)}>
            <div className={slides.indexOf(slide) === slideNum ? 'slide-dot-inner' : 'slide-dot-inner-inactive'}></div>
            {/* <div className='slide-dot-inner'></div> */}
          </div>
        ))
        }
      </div>

      
    </div>
  )
}



const Home2 = () => {
  return (
    <HomeSlideType2 />
    )
}

export default Home
