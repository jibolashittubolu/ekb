import './termsAndConditions.scss'
import terms_img from '../../../assets/imgs/Ekaabo Website Layout terms.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const TermsAndConditons = () => {
  const hoc_content = 
  <div className='hoc-terms-and-conditions'>
    <h2 className='hoc-terms-and-conditions-h2'>TERMS AND CONDITIONS</h2>
    <p>Please read these Terms of Use (“Terms”, “Terms of Use”) carefully before
    using the https://www.ekaaboafrica.com website (the “Service”) operated by
    Ekaabo Trade Show (“us”, “we”, or “our”).</p>
    <p>Your access to and use of the Service is conditioned on your acceptance of
    and compliance with these Terms. These Terms apply to all visitors, users and
    others who access or use the Service.</p>
  </div>

  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="TERMS & CONDITIONS"
    img_src={terms_img}
    img_alt="terms and conditions"/>
  )
}

export default TermsAndConditons