import Logo from '@/components/Logo';
import './Header.scss'
import classNames from 'classnames';
import Button from '@/components/Button';

const Header = (props) => {
  const {
    url,
  } = props;

  const menuItems = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Movies & Shows',
      href: '/movies'
    },
    {
      label: 'Support',
      href: '/support'
    },
    {
      label: 'Subscriptions',
      href: '/subscriptions'
    }
  ]

  return (
    <header className='header'>
      <div className="header__inner container">
        <Logo loading='eager'></Logo>
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map(({label, href}, index) => (
              <li className='header__menu-item' key={index}>
                <a 
                  href={href} 
                  className={classNames('header__menu-link', {
                    'is-active': href === url
                  })}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <Button 
            className="header__button"
            label="Search"
            isLabelHidden
            mode="transparent"
            iconName="search"
          >
          </Button>
          <Button 
            className="header__button"
            label="Notifications"
            isLabelHidden={true}
            mode="transparent"
            iconName="notification"
          >
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header;