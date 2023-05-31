import { FC } from 'preact/compat'
import { ReactComponent as IconWhatsapp } from '../images/icon-whatsapp.svg'
import styles from './Whatsapp.module.css'

export const Whatsapp: FC = () => {
  return (
    <div class={styles.whatsapp}>
      <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}>
        <IconWhatsapp />
      </a>
    </div>
  )
}
