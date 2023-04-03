import './contactInfo.scss'
import contact_img from '../../../assets/imgs/Ekaabo Website Layout contact.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const ContactInfo = () => {
  const hoc_content = 
  <div className='hoc-contact-info'>
    <h2 className='hoc-contact-info-h2'>CONTACT INFO</h2>
    <p>
    Please contact the Marketing Department for any other enquiries,
    information, sponsorship packages and opportunities available in more
    details.
    </p>
    <div>Room 6, OYTHDP Department</div>
    <div>Oyo State Tourism Board</div>
    <div>07034701104, 09129906500</div>
    <div>info@ekaaboafrica.com</div>

    
  </div>

  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="CONTACT INFO"
    img_src={contact_img}
    img_alt="contact info"/>
  )
}

export default ContactInfo