import Accordion from '../Accordion'
import AccordionGroup from '../AccordionGroup'
import seasonItems from './seasonItems'
import './Seasons.scss'

const Seasons = () => {
  return (
    <AccordionGroup
      mode="dark"
      isOrderedList={false}
    >
      {seasonItems.map(({title, subtitle, episodes}, index) => (
        <Accordion
          title={title}
          titleLevelClassName="h4"
          subtitle={subtitle}
          id={`season-${index}`}
          name="seasons"
          isOpen={index === 0}
          key={index}
          isArrowButton
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, porro!
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons