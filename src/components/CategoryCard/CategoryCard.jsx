import { Image } from 'minista';
import './CategoryCard.scss'
import Icon from '../Icon';

const CategoryCard = (props) => {
  const {
    title,
    images = [],
  } = props

  return (
    <a href="/movies" className="category-card">
      <div className="category-card__images">
        {images.map((imgSrc, index) => (
          <Image
            src={imgSrc}
            className='category-card__image'
            key={index}
          >
          </Image>
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title ">
          {title}
        </h3>
        <Icon
          className="category-card__icon"
          name="arrow-right"
        >
        </Icon>
      </div>
    </a>
  )
}

export default CategoryCard;