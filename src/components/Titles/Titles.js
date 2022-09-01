import Segment from './Segment/Segment'
import s from './Titles.module.css'

const Titles = () => {

  const segmentNames = ["Netflix'te Popüler", "Gündemdekiler", "Gerilim Filmleri", "Aksiyon ve Macera"]
  return (
    <div className={s.Titles}>
      {segmentNames.map(segmentTitle => <Segment title={segmentTitle} />)}
    </div>
  )
}

export default Titles