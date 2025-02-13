import classNames from 'classnames';
import './SliderNavigation.scss'
import Button from '@/components/Button';

const SliderNavigation = (props) => {
  const {
    className,
    id,
    hasPagination = true,
    /**
     * '' (default) | 'tile'
     */
    mode = ''
  } = props

  return (
    <div
      className={classNames(className, 'slider-navigation', {
       [`slider-navigation--${mode}`]: mode, 
      })}
      id={id}
      data-js-slider-navigation=""
    >
      <Button
        className='slider-navigation__arrow-button slider-navigation__arrow-button--previous'
        mode="black-10"
        iconName="arrow-left"
        label="Previous slide"
        isLabelHidden
        extraAttrs={{
          'data-js-slider-previous-button': ''
        }}
      >
      </Button>

      {hasPagination && (
        <div 
          className="slider-navigation__pagination"
          data-js-slider-pagination=""
        >
        </div>
      )}

      <Button
        className='slider-navigation__arrow-button slider-navigation__arrow-button--next'
        mode="black-10"
        iconName="arrow-right"
        label="Next slide"
        isLabelHidden
        extraAttrs={{
          'data-js-slider-next-button': ''
        }}
      >
      </Button>
    </div>
  )
}

export default SliderNavigation;
