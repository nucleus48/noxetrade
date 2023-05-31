import { FC } from 'preact/compat'
import { StateUpdater, useEffect, useState } from 'preact/hooks'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

type NavigationProps = {
  openMenu: boolean
  setOpenMenu: StateUpdater<boolean>
}

const Market: FC = () => {
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <div>
      <div onClick={() => setOpenDropdown(b => !b)}>Market</div>
      <div class={`${styles.market} ${openDropdown && styles.expand}`}>
        <div>Exchange</div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export const Navigation: FC<NavigationProps> = ({ openMenu, setOpenMenu }) => {
  useEffect(() => {
    document.documentElement.style.overflow = openMenu ? 'hidden' : 'auto'
  }, [openMenu])
  return (
    <div
      class={styles.navigation}
      style={{ visibility: openMenu ? 'visible' : 'hidden' }}
    >
      <nav class={`${openMenu && styles.open}`}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact us</li>
          </Link>
          <li>
            <Market />
          </li>
          <Link to="login">
            <button>Log in</button>
          </Link>
        </ul>
      </nav>
      <div
        class={`${!openMenu && styles.dim}`}
        onClick={() => setOpenMenu(b => !b)}
      ></div>
    </div>
  )
}
