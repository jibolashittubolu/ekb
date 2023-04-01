import './sessions.scss'
import home1 from '../../../assets/imgs/Ekaabo Website Layout home 1.jpg'

const Sessions = () => {
  return (
    <div className='hst2'>
    <div className='hst2-yellow-head'>SESSIONS</div>
    <div className='hst2-body'>
      <div className='hst1-left'>
        <img className='hst1-img' src={home1} alt='' />
      </div>
      <div className='hst1-right'>
        <div className='hst1-right-top'>
          <div  className='hst1-right-top1'>TOURISM</div>
          <p className='hst1-right-top2'>The tourism and hospitality industry in Oyo State has huge potential yet unexplored, which if fully supported by all the stakeholders, can contribute signicantly to the economic diversification that will definitely lead to economic growth, reducing poverty, improving natural resource management, conserving biodiversity, employment generation, empowerment, community development, among others 
          </p>
          </div >
          <div className='hst1-right-bottom'>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sessions