import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import './MovieDetails.scss'
import Slider from '@/components/Slider'
import PersonCard from '@/components/PersonCard'
import Button from '@/components/Button'
import ReviewCard from '@/components/ReviewCard'
import Icon from '@/components/Icon'
import Tags from '@/components/Tags'
import Ratings from '@/components/Ratings'

const MovieDetails = () => {
  const titleId = 'movie-details-title'
  const castSliderNavigationId = 'movie-card-slider-navigation'

  const castItems = [
    { imgSrc: '/src/assets/images/people/1.jpg', imgAlt: 'Dmitry Stupin' },
    { imgSrc: '/src/assets/images/people/1.jpg', imgAlt: 'Dmitry Stupin' },
    { imgSrc: '/src/assets/images/people/1.jpg', imgAlt: 'Dmitry Stupin' },
    { imgSrc: '/src/assets/images/people/1.jpg', imgAlt: 'Dmitry Stupin' },
    { imgSrc: '/src/assets/images/people/1.jpg', imgAlt: 'Dmitry Stupin' },
    { imgSrc: '/src/assets/images/people/1.jpg', imgAlt: 'Dmitry Stupin' },
    { imgSrc: '/src/assets/images/people/1.jpg', imgAlt: 'Dmitry Stupin' },
    { imgSrc: '/src/assets/images/people/1.jpg', imgAlt: 'Dmitry Stupin' },
    { imgSrc: '/src/assets/images/people/1.jpg', imgAlt: 'Dmitry Stupin' },
  ]

  const reviewItems = [
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
    {
      name: 'Aniket Roy',
      subtitle: 'From India',
      description: 'This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.',
      ratingValue: 4.5,
    },
  ]

  return (
    <section
      className="movie-details container"
      aria-labelledby={titleId}
    >
      <h2
        className="visually-hidden"
        id={titleId}
      >
        Detailed movie information
      </h2>
      <div className="movie-details__main">
        <div className="movie-details__panel">
          <div className="movie-details__group">
            <h3 className="movie-details__title">
              Description
            </h3>
            <div className="movie-details__description">
              <p>
                A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.
              </p>
            </div>
          </div>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">
              Cast
            </h3>
            <SliderNavigation
              id={castSliderNavigationId}
              hasPagination={false}
              mode="rounded"
              buttonMode="black-08"
            >
            </SliderNavigation>
          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollOnMobile={false}
            sliderParams={{
              slidesPerView: 'auto',
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: 'auto',
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              }
            }}
          >
            {castItems.map((castItem, index) => (
              <PersonCard
                {...castItem}
                key={index}
              >
              </PersonCard>
            ))}
          </Slider>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">
              Reviews
            </h3>
            <Button
              mode="black-08"
              iconName="plus"
              label="Add Your Review"
              href="/"
            >
            </Button>
          </header>
          <Slider
            navigationMode="rounded"
            isNavigationHiddenMobile={false}
            hasScrollBarOnMobile={false}
            sliderParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  allowTouchMove: false,
                  spaceBetween: 20,
                },
              },
            }}
          >
            {reviewItems.map((reviewItem, index) => (
              <ReviewCard
                {...reviewItem}
                key={index}
              >

              </ReviewCard>
            ))}
          </Slider>
        </div>
      </div>
      <aside className="movie-details__info">
        <div className="movie-details__panel">
          <div className="movie-details__groups">
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name='calendar'></Icon>
                <span>Released Year</span>
              </h3>
              <div className="movie-details__description">
                <time datetime="2022" className='h6'>2022</time>
              </div>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name='translate'></Icon>
                <span>Available Languages</span>
              </h3>
              <Tags
                items={['English', 'Hindi', 'Tamil', 'Telegu', 'Kannada']}
              >
              </Tags>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name='star'></Icon>
                <span>Ratings</span>
              </h3>
              <Ratings
                items={[
                  { title: 'IMDb', ratingValue: 4.5 },
                  { title: 'Streamvibe', ratingValue: 4 },
                ]}
              >
              </Ratings>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name='genres'></Icon>
                <span>Genres</span>
              </h3>
              <Tags items={['Action', 'Adventure']}></Tags>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                Director
              </h3>
              <PersonCard
                name="Rishab Shetty"
                subtitle="From India"
                imgSrc="/src/assets/images/people/director.jpg"
              >
              </PersonCard>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                Music
              </h3>
              <PersonCard
                name="B. Ajaneesh Loknath"
                subtitle="From India"
                imgSrc="/src/assets/images/people/music.jpg"
              >
              </PersonCard>
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default MovieDetails