import './schedule.scss'
import ekaabo_poster from '../../assets/images/ekaabo_poster.png'
import logo_trans from '../../assets/images/logo_trans.png'

const Schedule = () => {
  return (
    <div className='schedule'>
      <div className='ekaabo-poster-img-cont'>
        <img className='ekaabo-poster-img' src={logo_trans} alt='poster' />

      </div>
      <div className='exhibit-horizontal-line'>
          <span></span>
          <div className='exhibit-hr-line'></div>
          <span></span>
      </div>
      <h1>A detailed description of the daily schedule of the event will be released shortly.</h1>
        <h2>You can <a className='to-be-notified' href='/notify'>click here</a> to get notified as soon as the schedule is made available.</h2>
    </div>
  )
}

export default Schedule