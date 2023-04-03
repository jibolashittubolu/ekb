import './sessions.scss'
import sessions_img from '../../../assets/imgs/Ekaabo Website Layout sessions.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const Sessions = () => {
  const hoc_content = 
  <div>
    <h2>PANEL SESSION 1: Destination Marketing and Management</h2>
    <p>The marketing of a destination necessitates strategic planning, decision making, and
    organization. Effective positioning will result in a strong brand that develops an emotional
    and productive two-way relationship. This panel session is to focus on utilising destination
    branding and content marketing for sustainable growth and competitive advantage within
    the tourism and hospitality industry, including tools and techniques for travel branding and
    best practices for better tourism management strategies.</p>
    <h2>PANEL SESSION 2: Hotel Revenue & Distribution</h2>
  </div>
  
  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="S E S S I O N S"
    img_src={sessions_img}
    img_alt="sessions"/>
  )
}

export default Sessions