import Badge from '../Badge'
import RatingView from '../RatingView'
import './ReviewCard.scss'

const ReviewCard = (props) => {
  const {
    name,
    subtitle,
    description,
    ratingValue,
  } = props

  return (
    <div className="review-card">
      <header className="review-card__header">
        <div className="review-card__author">
          <h4 className="review-card__name h6">{name}</h4>
          <p className="review-card__subtitle">{subtitle}</p>
        </div>
        <Badge>
          <RatingView
            value={ratingValue}
            label={ratingValue}
          >
          </RatingView>
        </Badge>
      </header>
      <div className="review-card__body">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ReviewCard