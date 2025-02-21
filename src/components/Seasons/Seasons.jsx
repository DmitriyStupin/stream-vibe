import Accordion from '../Accordion'
import AccordionGroup from '../AccordionGroup'
import EpisodeCard from '../EpisodeCard'
import seasonItems from './seasonItems'
import './Seasons.scss'

const Seasons = () => {
  return (
    <AccordionGroup
      className="seasons"
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
          <ul className="seasons__list">
            {episodes.map((episode, index) => (
              <li 
                className="seasons__item"
                key={index}
              >
              <EpisodeCard
                {...episode}
              >
              </EpisodeCard>
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons