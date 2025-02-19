import { Image } from 'minista';
import './PersonCard.scss'

const PersonCard = (props) => {
  const {
    imgSrc,
    imgAlt,
  } = props

  return (
    <div className="person-card">
      <Image
        classname='person-card__image'
        src={imgSrc}
        alt={imgAlt}
        title={imgAlt}
      >

      </Image>
    </div>
  )
}

export default PersonCard;