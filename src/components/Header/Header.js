import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import { ReactComponent as Icon } from '../../ridhi_portfolio_logo.svg'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            <Icon width="2.5rem" height="2.5rem" fill="blue" />
          </a>
        ) : (
          <Icon width="2.5rem" height="2.5rem" fill="blue" />
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
