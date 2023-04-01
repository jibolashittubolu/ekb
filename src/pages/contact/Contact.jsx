import './contact.scss'
import {  LocationOn, Email, AccessAlarm, Phone} from '@mui/icons-material';
import logo_trans_96 from '../../assets/images/logo_trans_96.png'

const Contact = () => {
  return (
    <div className='contact'>
      <section
      className='contact-cards'>
        <div
        className='cc-1-card '>
          <div className='cc-logo-cont'>
                {/* <span className='cc1-cont-a1 fot-i'></span> */}
                <img className='cc-logo-img' src={logo_trans_96} alt='logo' />
          </div>
          <h1>EKAABO AFRICA</h1>
          <div
          className='cc-1-cont-x'>
            <div className='cc-1-cont-a'>
              <span className='cc1-cont-a1'><LocationOn /></span>
              <span className='cc1-cont-a2x'>
                <span>Room 6, OYTHDP, Oyo State Tourism Board, Bale Shittu, Agodi Gate, Ibadan</span>
                <span>ICT Building, National Musueum, Aleshinloye, Ibadan</span>
              </span>
            </div>
            <div className='cc-1-cont-a'>
              <span className='cc1-cont-a1' ><Email /></span>
              <span className='cc1-cont-a2' >info@ekaaboafrica.com</span>
            </div>
            <div className='cc-1-cont-a'>
              <span className='cc1-cont-a1' ><Phone /></span>
              <span className='cc1-cont-a2' >07034701104</span>
            </div>
            <div className='cc-1-cont-a'>
              <span className='cc1-cont-a1'><AccessAlarm /></span>
              <span className='cc1-cont-a2x'>
                <span>Opening hours of the ministry:</span>
                <span>Mon-Fri 8:00 am - 4:00 pm</span>
                
              </span>
            </div>
          </div>
        </div>
        <div
        className='cc-1-card '>
          <h6>{'{LOGO}'}</h6>
          <h1>Ministry of Information</h1>
          <div
          className='cc-1-cont-x'>
            <div className='cc-1-cont-a'>
              <span className='cc1-cont-a1'><LocationOn /></span>
              <span className='cc1-cont-a2'>Ministry of Information, Culture and Tourism, Secretariat, Ibadan</span>
            </div>
            <div className='cc-1-cont-a'>
              <span className='cc1-cont-a1' ><Email /></span>
              <span className='cc1-cont-a2' >info@oyostate.gov.ng</span>
            </div>
            <div className='cc-1-cont-a'>
              <span className='cc1-cont-a1'><AccessAlarm /></span>
              <span className='cc1-cont-a2x'>
                <span>Opening hours of the ministry:</span>
                <span>Mon-Fri 8:00 am - 4:00 pm</span>
                
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact