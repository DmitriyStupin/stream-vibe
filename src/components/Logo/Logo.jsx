import "./Logo.scss";
import classNames from "classnames";

const Logo = (props) => {
  const { 
    className,
    loading = 'lazy',
  } = props
  const title = 'Home'

  return (
    <a 
      href="/" 
      className={classNames(className, 'logo')}
      title={title}
      aria-label={title}
    >
      <img 
        src="/logo.svg"
        alt="" 
        className="logo__image"
        width={199}
        height={60} 
        loading={loading}
      />
    </a>
  )
}

export default Logo;