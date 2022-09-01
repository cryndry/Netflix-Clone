import s from './Segment.module.css'
import RightSideSlider from './Right-side-slider'

const Segment = (props) => {
  return (
    <div className={s.Segment}>
      <h3 className={s.SegmentTitle}>{props.title}</h3>
      <div className={s.SegmentParts}>
        {props.images.map(image => <img src={image} alt='' />)}
        <button className={s.RightButton}>
          <RightSideSlider />
        </button>
      </div>
    </div>
  )
}

export default Segment