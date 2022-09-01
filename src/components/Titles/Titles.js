import Segment from './Segment/Segment'
import s from './Titles.module.css'
import img11 from "../../images/1-1.jpg"
import img12 from "../../images/1-2.jpg"
import img13 from "../../images/1-3.jpg"
import img14 from "../../images/1-4.jpg"
import img15 from "../../images/1-5.jpg"
import img21 from "../../images/2-1.jpg"
import img22 from "../../images/2-2.jpg"
import img23 from "../../images/2-3.jpg"
import img24 from "../../images/2-4.jpg"
import img25 from "../../images/2-5.jpg"
import img31 from "../../images/3-1.jpg"
import img32 from "../../images/3-2.jpg"
import img33 from "../../images/3-3.jpg"
import img34 from "../../images/3-4.jpg"
import img35 from "../../images/3-5.jpg"
import img41 from "../../images/4-1.jpg"
import img42 from "../../images/4-2.jpg"
import img43 from "../../images/4-3.jpg"
import img44 from "../../images/4-4.jpg"
import img45 from "../../images/4-5.jpg"

const Titles = () => {
  const segmentProps = {
    "Netflix'te Popüler": [img11, img12, img13, img14, img15],
    "Gündemdekiler": [img21, img22, img23, img24, img25],
    "Gerilim Filmleri": [img31, img32, img33, img34, img35],
    "Aksiyon ve Macera": [img41, img42, img43, img44, img45]
  }

  return (
    <div className={s.Titles}>
      {Object.keys(segmentProps).map(segmentTitle => <Segment key={segmentTitle} title={segmentTitle} images={segmentProps[segmentTitle]} />)}
    </div>
  )
}

export default Titles