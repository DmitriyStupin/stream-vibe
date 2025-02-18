import { Image } from 'minista';
import './CategoryCard.scss'
import Icon from '../Icon';
import Badge from '../Badge';

const CategoryCard = (props) => {
  const {
    title,
    images = [],
    badge,
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
          {badge && (
            <Badge
              className="category-card__badge"
              mode="accent"
              isBig
            >
              {badge}
            </Badge>
          )}
          <span>{title}</span>
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