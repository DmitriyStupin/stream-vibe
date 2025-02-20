import classNames from 'classnames'
import './Accordion.scss'
import Icon from '../Icon'

const Accordion = (props) => {
  const {
    title,
    id,
    name,
    isOpen,
    children,
    titleLevelClassName = 'h5',
    subtitle,
    isArrowButton = false,
  } = props

  return (
    <div className="accordion">
      <details 
        className="accordion__details"
        name={name}
        open={isOpen}
      >
        <summary className="accordion__summary">
          <h3 
            className={classNames('accordion__title', titleLevelClassName)}
          >
            <span
              role='term'
              aria-details={id}
            >
              {title}
            </span>
            {subtitle && <span className="accordion__subtitle">{subtitle}</span> }
            {isArrowButton && (
              <div className="accordion__arrow">
                <Icon
                  name="arrow-down"
                >
                </Icon>
              </div>
            )}
          </h3>
        </summary>
      </details>
      <div 
        className="accordion__content"
        id={id}
        role='definition'
      >
        <div className="accordion__content-inner">
          <div className="accordion__content-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion