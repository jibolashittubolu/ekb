import React from 'react'
import './ekbHomeComponent.scss'
import test_img from '../../../assets/imgs/Ekaabo Website Layout home 3.jpg'

const EkbHomeComponent1 = ({src, alt, image_position, heading, text, hocThing}) => {
  

  return(
    <div className='ekb-home-component'>
      <div className='ekb-hc-head'>
          S E S S I O N S
      </div>
      <div className='ekb-hc-body'>
        <div className='ekb-hc-body-left'>
          <img className='ekb-hc-body-img' src={test_img} alt=''/>
        </div>
        <div className='ekb-hc-body-right'>
          {/* content starts */}
          <div className='ekb-hc-body-right-content'>
            <span>PANEL SESSION 1: Destination Marketing and Management</span>
            <p>The marketing of a destination</p>
            <p>The marketing of a destination</p>
            <p>The marketing of a destination</p>
            <p>The marketing of a destination necessitates strategic planning, decision making, and
            organization. Effective positioning will result in a strong brand that develops an emotional
            and productive two-way relationship. This panel session is to focus on utilising destination
            branding and content marketing for sustainable growth and competitive advantage within
            the tourism and hospitality industry, including tools and techniques for travel branding and
            best practices for better tourism management strategies.</p>
            <p>The marketing of a destination</p>
            <p>The marketing of a destination</p>
            <p>The marketing of a destination</p>
          </div>
          {/* content ends */}
          <div className='ekb-hc-body-read-more'>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </div>

  )
}

const EkbHomeComponent = ({hoc_content, heading, img_src, img_alt}) => {

  return(
    <div className='ekb-home-component'>
      <div className='ekb-hc-head'>
          {heading}
      </div>
      {

      }
      <div className='ekb-hc-body'>
        <div className='ekb-hc-body-left'>
          <img className='ekb-hc-body-img' src={img_src} alt={img_alt}/>
        </div>
        <div className='ekb-hc-body-right'>
          {/* content starts */}
          {
            hoc_content
          }
          {/* content ends */}
          <div className='ekb-hc-body-read-more'>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default EkbHomeComponent