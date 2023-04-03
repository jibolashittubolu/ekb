import './workshops.scss'
import workshops_img from '../../../assets/imgs/Ekaabo Website Layout workshops.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const Workshops = () => {
  const hoc_content = 
  <div>
    <h2>FOOD WORKSHOPS</h2>
    <p>There will be various food workshops at the Ekaabo Trade Show 2023. A track of food and kitchen-based workshops made available for interested participants to see demonstrations
    and taste, learn tips and tricks for increasing revenue, table setup. Various seasoned practitioners will be on ground at the event to take attendees on all kinds of food workshops. Other Special Workshops There will also be various other specialized
    workshops in line with tourism, hospitality and culture at Ekaabo Trade Show 2023</p>
    <h2>BITE SIZED WORKSHOPS</h2>
  </div>
  
  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="W O R K S H O P S"
    img_src={workshops_img}
    img_alt="workshops"/>
  )
}

export default Workshops