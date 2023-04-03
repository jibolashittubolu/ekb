import './visaApplication.scss'
import visa_img from '../../../assets/imgs/Ekaabo Website Layout visa.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const VisaApplication = () => {
  const hoc_content = 
  <div className='hoc-invitation-letter'>
    <h2 className='hoc-visa-application-h2'>VISA APPLICATION</h2>
    <p>A VISA is required by people from all countries visiting Nigeria
    Applications can be made online through the Nigeria Immigration Service
    https://portal.immigration.gov.ng/</p>
    <p>You will be required to submit the following documents:
    A letter of invitation from a company/host (with full address) accepting
    immigration responsibility + passport copy and business certicate of the
    host.</p>
  </div>

  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="VISA APPLICATION"
    img_src={visa_img}
    img_alt="visa application"/>
  )
}

export default VisaApplication