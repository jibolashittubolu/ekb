import './invitationLetter.scss'
import invitation_img from '../../../assets/imgs/Ekaabo Website Layout invitation.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const InvitationLetter = () => {
  const hoc_content = 
  <div className='hoc-invitation-letter'>
    <h2 className='hoc-invitation-letter-h2'>VENUE & TRAVEL</h2>
    <p>
    If you require a Nigerian Visa in order to attend Ekaabo Trade Show 2023 please complete the form below. We can only provide registration letters to
    registered delegates. Registered delegates MUST use the email address they are registered under in order to receive their visa letter. If you are registered you will receive an immediate email response. If you do not receive an immediate email response, and are registered to attend Ekaabo Trade Show 2023, please check your junk email box for an email from info@ekaaboafrica.com , if the visa letter is not there please contact us on
    info@ekaaboafrica.com.
    </p>

    
  </div>

  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="INVITATION TO ATTEND"
    img_src={invitation_img}
    img_alt="invitation to attend"/>
  )
}

export default InvitationLetter