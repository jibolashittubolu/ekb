import './speakers.scss'
import speakers_img from '../../../assets/imgs/Ekaabo Website Layout speakers.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const Speakers = () => {
  const hoc_content = 
  <div className='schedule-speakers'>
    <h1>COMING SOON</h1>
  </div>
  
  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="S P E A K E R S"
    img_src={speakers_img}
    img_alt="speakers"/>
  )
}

export default Speakers