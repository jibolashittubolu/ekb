import './specialDestinations.scss'
import village_img from '../../../assets/imgs/village.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const SpecialDestinations = () => {
  const hoc_content = 
  <div>
    <h2>VILLAGE LIFE EXPERIENCE</h2>
    <p>The Village Life Experience will be a cultural masterpiece. This will be the rst of its kind
    Eco-village-like set up right in the center of the event grounds. Attendees will have the
    opportunity to experience a rural ambience in terms of the food, the designs, aesthetics,
    decorations, clothes, props, people, livelihood etc. So also the experience will take
    participants on stylish and an interactive journey which will host a whole world of village
    activities, exhibitions, and workshops ranging from Art and Craft Workshops like Creative
    DIY, Paintings, Pottery wheels, O weaving, bead making, scented candle making, Tie and
    Dye making, and other interesting workshops will be happening simultaneously.</p>

  </div>
  
  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="SPECIAL DESTINATIONS"
    img_src={village_img}
    img_alt="special destinations"/>
  )
}

export default SpecialDestinations