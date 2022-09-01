import s from './Segment.module.css'
import thumbnail10h from '../../../assets/thumbnail-top10-h.jpg'
import thumbnail10 from '../../../assets/thumbnail-top10.jpg'
import thumbnail from '../../../assets/thumbnail.jpg'
import RightSideSlider from './Right-side-slider'

const Segment = (props) => {
  return (
    <div className={s.Segment}>
      <h3 className={s.SegmentTitle}>{props.title}</h3>
      <div className={s.SegmentParts}>
        <img src={thumbnail10h} alt='' />
        <img src={thumbnail10h} alt='' />
        <img src={thumbnail10h} alt='' />
        <img src={thumbnail10h} alt='' />
        <img src={thumbnail10h} alt='' />
        <button className={s.RightButton}>
          <RightSideSlider />
        </button>
      </div>
    </div>
  )
}

export default Segment