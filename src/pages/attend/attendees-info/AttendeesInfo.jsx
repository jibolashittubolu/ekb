import './attendeesInfo.scss'
import attend_img from '../../../assets/imgs/custom-trade-show-exhibits.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const AttendeesInfo = () => {
  const hoc_content = 
  <div className='hoc-sponsor'>
    <h2 >WHY ATTEND?</h2>
    <p>Ekaabo is Yoruba Language, meaning “Welcome”. Ekaabo Trade Show 2023
    is an "Exposition" organized for Stakeholders in the Tourism, Culture,
    Hospitality and Trade Industry to come together, showcase their products and
    services to others in the industry. This also acts as a catalyst in providing
    business for various suppliers within the booming industry.
    This event is to be the country’s leading annual Tourism, Hospitality and
    Cultural Trade Show which will incorporate all aspects of goods and services
    for our multifaceted industry; </p>
  </div>

  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="ATTENDEES INFORMATION"
    img_src={attend_img}
    img_alt="attendees information"/>
  )
}

export default AttendeesInfo