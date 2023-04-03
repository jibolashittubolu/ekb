import './listOfFaq.scss'
import faq_img from '../../../assets/imgs/Ekaabo Website Layout FAQ.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'
import { Link } from 'react-router-dom'
import { ROUTER_LINKS } from '../../../utils/ROUTER_LINKS'

const ListOfFaq = () => {
  const hoc_content = 
  <div className='hoc-contact-info'>
    <h2>LIST OF FAQ</h2>
    <p>
      <div><strong>Is the exhibition open to organizations outside Nigeria?</strong></div>
      <div>Yes, it is open to organizations all over the world, you can register using the
link <Link to={ROUTER_LINKS.attend.register_to_attend}>HERE</Link> </div>
    </p>
    <p>
      <div><strong>Can our team be picked up at the airport when we arrive in Nigeria?</strong></div>
      <div>Yes, we can. Airport pick-ups can be arranged for you upon request. Just
contact us via our contact Info.</div>
    </p>
    
  </div>

  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="FAQ"
    img_src={faq_img}
    img_alt="list of FAQ"/>
  )
}

export default ListOfFaq