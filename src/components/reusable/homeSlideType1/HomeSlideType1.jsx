import React from 'react'
import './homeSlideType1.scss'
import test_img from '../../../assets/imgs/Ekaabo Website Layout home 3.jpg'

const HomeSlideType1 = ({src, alt, image_position, heading, text, hocThing}) => {
  const runPositionCheck = (what_i_want) => {
    if(image_position === ('left' || "right") ){
      return what_i_want
    }
    return ''
  }
  return (
    <>
    <div 
    className='home-slide-item hst1'>
      <div 
      className='hst1-left not-mobile'
      style={{
        display: image_position === 'left' ? '' : 'none',
        flex: image_position === 'left' ? 2 : ''
      }}>
        <img className='hst1-img' src={src} alt='' />
      </div>
      <div 
      className='hst1-right not-mobile'
      style={{
        flex: image_position === 'left' ? 3 : 2,
        // padding: image_position === 'right' ? '0rem 5rem 0rem 0rem': '0rem 2.5rem'
      }}>
        <div className='hst1-right-top'>
          <div  className='hst1-right-top1'>{heading}</div>
          <p className='hst1-right-top2'>{text} 
          </p>
        </div >
        <div className='hst1-right-bottom'>
          <button>LEARN MORE</button>
        </div>
      </div>
      <div 
      className='hst1-left not-mobile'
      style={{
        display: image_position === "left" ? 'none': '',
        flex: image_position === 'right' ? 4 : ''
      }}>
        <img className='hst1-img' src={src} alt='' />
      </div>

      <div 
      className='hst1-left mobile'
      >
        <img className='hst1-img' src={src} alt='' />
      </div>
      <div 
      className='hst1-right mobile'>
        <div className='hst1-right-top'>
          <div  className='hst1-right-top1'>{heading}</div>
          <p className='hst1-right-top2'>{text} 
          </p>
        </div >
        <div className='hst1-right-bottom'>
          <button>LEARN MORE</button>
        </div>
      </div>



    </div>
          {
        !image_position ? <span
        style={{
          color: 'lime'
        }}>Please specify image_positon prop as left or right</span> : ''
      }
    </>
    

    
  )
}

export default HomeSlideType1