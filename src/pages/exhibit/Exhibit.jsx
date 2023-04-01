import { useNavigate } from 'react-router-dom'
import './exhibit.scss'

const Exhibit = () => {
  const navigate = useNavigate()
  return (
    <div className='exhibit'>
      <h1 className='exhi-h1'>EXHIBITOR INFORMATION</h1>

      <div className='exhibit-horizontal-line'>
          <span></span>
          <div className='exhibit-hr-line'></div>
          <span></span>
      </div>

      <h1>Registration to exhibit at EKAABO'22 is open!</h1>

      <div className='exhibit-horizontal-line'>
          <span></span>
          <div className='exhibit-hr-line'></div>
          <span></span>
      </div>

      <h1>
      <button 
      onClick={() => navigate('/register')}
      className='r-button'>Register Now</button></h1>
      <div className='exhibit-horizontal-line'>
          <span></span>
          <div className='exhibit-hr-line'></div>
          <span></span>
      </div>

      <h1>Why Exhibit?</h1>
      <section className='exhi-s1'>
        <span className='exhi-s1-item'>
          <h1 className='h1-removed'>Brand Awareness</h1>
          <span>Build brand awareness within the Oyo State tourism industry. Exhibiting is a powerful way to reinforce your corporate image with tourism and hospitality professionals from across the state</span>
        </span>
        <span className='exhi-s1-item'>
          <h1 className='h1-removed'>Network</h1>
          <span>GC is attended by Florida tourism professionals, state leaders, marketing agencies, and travel experts. Network with industry decision-makers, and potential new clients under one roof.</span>
        </span>
        <span className='exhi-s1-item'>
          <h1 className='h1-removed'>Get To Know The Industry</h1>
          <span>As an exhibitor, you receive one or two conference registrations. Get to know potential customers while you explore the latest trends and opportunities for the tourism industry.</span>
        </span>
        <span className='exhi-s1-item'>
          <h1 className='h1-removed'>Launch New Products</h1>
          <span>Launch new products and highlight your existing services. Attendees tend to be motivated, interested, and ready to learn about products, programs and technology that will grow their companies.</span>
        </span>
        <span className='exhi-s1-item'>
          <h1 className='h1-removed'>Build Relationships</h1>
          <span>Generate new leads and strengthen your existing relationships. Take advantage of this opportunity to expand your company’s customer base and obtain a multitude of qualified contacts in just a few days.</span>
        </span>
        <span className='exhi-s1-item'>
          <h1 className='h1-removed'>Obtain Customer Feedback</h1>
          <span>Wondering what customers think of your company or how you compare to the competition? GC offers the perfect opportunity to query attendees on countless topics.</span>
        </span>
      </section>
    </div>
  )
}

export default Exhibit