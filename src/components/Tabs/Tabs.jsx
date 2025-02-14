import classNames from 'classnames'
import './Tabs.scss'
import getTabsElementsFromTitle from './utils/getTabsElementsFromTitle'
import TabsNavigation from './components/TabsNavigation'

const Tabs = (props) => {
  const {
    className,
    title,
    items = [],
    navigationTargetElementId = null,
  } = props

  return (
    <div
      className={classNames(className, 'tabs')}
      data-js-tabs={JSON.stringify({
        navigationTargetElementId,
      })}
    >
      {!navigationTargetElementId && (
        <TabsNavigation
          title={title}
          items={items}
        >
        </TabsNavigation>
      )}
      <div className="tabs__body">
        {items.map((item, index) => {
          const {
            title,
            children,
            isActive,
          } = item

          const {
            buttonId,
            contentId
          } = getTabsElementsFromTitle(title)
          
          return (
            <div
              className={classNames('tabs__content', {
                'is-active': isActive,
              })}
              id={contentId}
              aria-labelledby={buttonId }
              tabIndex={0}
              data-js-tabs-content=""
              key={index}
            >
              {children}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tabs