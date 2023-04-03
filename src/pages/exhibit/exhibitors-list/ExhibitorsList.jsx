import './exhibitorsList.scss'
import exhibitors_list_img from '../../../assets/imgs/Ekaabo Website Layout exhibit list.jpg'
import EkbHomeComponent from '../../../components/reusable/ekbHomeComponent/EkbHomeComponent'

const ExhibitorsList = () => {
  const hoc_content = 
  <div className='hoc-exhibitors-list'>
    <h1>
      <div>

      LIST OF EXHIBITORS
      </div>
      <div>
        COMING    SOON
      </div>
    </h1>
    
  </div>

  return (
    <EkbHomeComponent 
    hoc_content={hoc_content} 
    heading="EXHIBITORS LIST"
    img_src={exhibitors_list_img}
    img_alt="exhibitors list"/>
  )
}

export default ExhibitorsList