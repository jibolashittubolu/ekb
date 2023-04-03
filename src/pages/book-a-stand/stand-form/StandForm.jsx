import './standForm.scss'
import exhibit_img from '../../../assets/imgs/Ekaabo Website Layout exhibit.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const Speakers = () => {
  const hoc_content = 
  <div className='book-a-stand-stand-form'>
    <p>Get to showcase your products and services to over 5,000 Tourism and Hospitalityprofessionals
    </p>
    <div className='book-a-stand-stand-form-button-cont'>
      <button>BOOK NOW</button>
    </div>
    <form>
      <span> First Name *</span>
      <span>Last Name *</span>
      <span>Mobile *</span>
      <span>Email *</span>
      <span>Company *</span>
      <span>Postion *</span>
      <span>Address *</span>
    </form>

    
  </div>

  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="BOOK A STAND FORM"
    img_src={exhibit_img}
    img_alt="exhibit"/>
  )
}

export default Speakers