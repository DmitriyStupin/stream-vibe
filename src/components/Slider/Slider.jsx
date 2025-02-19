import 'swiper/css';
import './Slider.scss'
import SliderNavigation from './components/SliderNavigation';
import classNames from 'classnames';

const defaultSliderParams = {
  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    481: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 20,
      allowTouchMove: false,
    },
    1441: {
      spaceBetween: 30,
      allowTouchMove: false,
    }
  }
}

const Slider = (props) => {
  const {
    children,
    navigationTargetElementId = null,
    sliderParams = defaultSliderParams,
    isBeyondTheViewportOnMobileS,
    hasScrollBarOnMobile = true,
    /**
     * '' (default) | 'abs-bottom'
     */
    navigationPosition = '',
    navigationMode,
    isNavigationHiddenMobile = true,
  } = props

  return (
    <div className={classNames('slider', {
      'slider--beyond-the-viewport-on-mobile-s': isBeyondTheViewportOnMobileS,
    })} 
      data-js-slider={JSON.stringify({
      sliderParams,
      navigationTargetElementId,
    })}>
      <div className="slider__swiper swiper" data-js-slider-swiper="">
        <ul className="slider__list swiper-wrapper">
           {children.map((slide, index) => (
            <li className="slider__item swiper-slide" key={index}>
              {slide}
            </li>
           ))}
        </ul>
      </div>

      {!navigationTargetElementId && (
        <SliderNavigation
          className="slider__navigation"
          mode={navigationMode}
          position={navigationPosition}
          isHiddenMobile={isNavigationHiddenMobile}
        >
          
        </SliderNavigation>
      )}

      {hasScrollBarOnMobile && (
        <div 
          className="slider__scrollbar visible-mobile"
          data-js-slider-scrollbar=""
        >

        </div>
      )}
    </div>
  )
}

export default Slider;