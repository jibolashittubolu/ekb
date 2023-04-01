import React from 'react'
import './homeSlideType1.scss'
import test_img from '../../../assets/imgs/Ekaabo Website Layout home 3.jpg'

const HomeSlideType2 = ({src, alt, image_position, heading, text, hocThing}) => {
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
      className='hst1-left'
      style={{
        display: image_position === 'left' ? '' : 'none',
        flex: image_position === 'left' ? 2 : ''
      }}>
        <img className='hst1-img' src={src} alt='' />
      </div>
      <div 
      className='hst1-right'
      style={{
        flex: image_position === 'left' ? 3 : 2
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
      className='hst1-left'
      style={{
        display: image_position === "left" ? 'none': '',
        flex: image_position === 'right' ? 3 : ''
      }}>
        <img className='hst1-img' src={src} alt='' />
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

export default HomeSlideType2