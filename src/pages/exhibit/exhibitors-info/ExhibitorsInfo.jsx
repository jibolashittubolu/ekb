import './exhibitorsInfo.scss'
import exhibit_img from '../../../assets/imgs/Ekaabo Website Layout exhibitors.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const ExhibitorsInfo = () => {
  const hoc_content = 
  <div className='hoc-exhibitors-info'>
    <h2>WHY EXHIBIT</h2>
    <p>
      <strong>Brand Awareness: </strong>
      <span>Get to build brand awareness! Exhibiting at Ekaabo Trade Show 2023 is a powerful way to reinforce your corporate image with tourism and hospitality professionals from across the nation. </span>
    </p>
    <p>
      <strong>Sales: </strong>
      <span>Sell directly to establishments that purchase your products in bulk and also sell to consumers directly. </span>
    </p>
    
  </div>

  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="EXHIBITORS INFORMATION"
    img_src={exhibit_img}
    img_alt="exhibitors information"/>
  )
}

export default ExhibitorsInfo