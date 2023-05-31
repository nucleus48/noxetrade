import { FC, useState } from 'preact/compat'
import { ReactComponent as IconMenu } from '../images/icon-menu.svg'
import { ReactComponent as IconClose } from '../images/icon-close.svg'
import { ReactComponent as IconLogin } from '../images/icon-login.svg'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { Navigation } from './Navigation'

export const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <header>
        <div class={`container ${styles.header}`}>
          <div
            class={(openMenu && styles.menuOpen) || ''}
            onClick={() => setOpenMenu(b => !b)}
          >
            {openMenu ? <IconClose /> : <IconMenu />}
          </div>
          <div>NoxeTrade</div>
          <Link to="/login">
            <IconLogin />
          </Link>
        </div>
      </header>
      <Navigation openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  )
}
