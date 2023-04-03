import './exhibitorsBrochure.scss'
import exhibitors_broc_img from '../../../assets/imgs/Ekaabo Website Layout exhibit brochure.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const ExhibitorsBrochure = () => {
  const hoc_content = 
  <div className='hoc-exhibitors-brochure'>
    <h2 className='hoc-exhibitors-brochure-top'>WHY EXHIBIT</h2>
    <p>
    Thank you for your interest and request for the exhibition brochure. Please ll
    the form below and the brochure will be immediately available to download.
    </p>
    <p>
      The brochure provides additional information to what is on this website.
    </p>
    <p>
    However, if you still haven’t found what you need, email us directly at <strong>
      info@ekaboafrica.com or WhatsApp +2347034701104
      </strong>
    </p>
    
  </div>

  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="EXHIBITORS BROCHURE"
    img_src={exhibitors_broc_img}
    img_alt="exhibitors brochure"/>
  )
}

export default ExhibitorsBrochure