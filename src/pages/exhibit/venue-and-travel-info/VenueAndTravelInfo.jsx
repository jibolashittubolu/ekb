import './venueAndTravelInfo.scss'
import venue_img from '../../../assets/imgs/Ekaabo Website Layout venue.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const ExhibitorsInfo = () => {
  const hoc_content = 
  <div className='hoc-venue-and-travel-info'>
    <h2>VENUE & TRAVEL</h2>
    <p>
    The International Conference Centre University of Ibadan is one of Nigeria’s
    foremost venues for both local and international events with a potential
    capacity for over 15,000 people, the venue is the most sought after in the
    state.
    </p>
    <h2>TRAVEL</h2>
    <p>
    How to find The International Conference Centre University of Ibadan
    </p>
    
  </div>

  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="VENUE & TRAVEL INFO"
    img_src={venue_img}
    img_alt="venue and travel info"/>
  )
}

export default ExhibitorsInfo