import { Image } from 'minista'
import './Support.scss'

const Support = () => {
  const titleId = 'support-title'

  return (
    <section
      className='support container'
      aria-labelledby={titleId}
    >
      <div className="support__body">
        <div className="support__info">
          <h1 className="support__title h2" id={titleId}>
            Welcome to our support page!
          </h1>
          <div className="support__description">
            <p>We're here to help you with any problems you may be having with our product.</p>
          </div>
        </div>
        <Image
          className='support__image'
          src='/src/assets/images/support/1.png'
        >
        </Image>
      </div>
      <form action="" className="support__form">
        
      </form>
    </section>
  )
}

export default Support