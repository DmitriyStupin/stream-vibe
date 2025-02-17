import { Image } from 'minista'
import './MovieBannerCard.scss'
import Button from '../Button'

const MovieBannerCard = () => {
  const {
    title,
    description,
    imgSrc,
  } = props

  return (
    <div 
      className="movie-banner-card"
    >
      <Image
        className='movie-banner-card__image'
        src={imgSrc}
      >
      </Image>
      <div className="movie-banner-card__inner">
        <div className="movie-banner-card__body">
          <h2 className="movie-banner-card__title h3">
            {title}
          </h2>
          <div className="movie-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <footer className="movie-banner-card__footer">
          <Button
            className='movie-banner-card__play-button'
            iconName="play"
            label="Play Now"
          >
          </Button>
          <div className="movie-banner-card__actions">
            <Button
              mode='black-06'
              iconName="plus"
              label="Add to playlist"
              isLabelHidden
            >
            </Button>

            <Button
              mode='black-06'
              iconName="like"
              label="Like"
              isLabelHidden
            >
            </Button>

            <Button
              mode='black-06'
              iconName="volume"
              label="Mute"
              isLabelHidden
            >
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MovieBannerCard