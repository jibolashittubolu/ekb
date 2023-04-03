import './beASponsor.scss'
import sponsor_img from '../../../assets/imgs/Ekaabo Website Layout sponsor.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const BeASponsor = () => {
  const hoc_content = 
  <div className='hoc-sponsor'>
    <h2 className='hoc-sponsor-h1-top'>Download The Sponsorship Brochure</h2>
    <p>Thank you for your interest and request for the Sponsorship brochure. Please fill the form below and the Sponsorship brochure will be immediately available to download </p>
    <p>
    The Sponsorship brochure provides additional information to what is on this  website.
    </p>
    <p>
    However, if you still haven’t found what you need, email us directly on
    <strong>
        info@ekaboafrica.com or WhatsApp +2347034701104
    </strong>
    </p>
  </div>

  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="BE A SPONSOR"
    img_src={sponsor_img}
    img_alt="sponsor"/>
  )
}

export default BeASponsor