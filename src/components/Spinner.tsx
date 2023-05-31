import { FC } from 'preact/compat'
import { ReactComponent as IconSpinner } from '../images/icon-spinner.svg'
import styles from "./Spinner.module.css"

export const Spinner: FC = () => {
  return (
    <div class={styles.spinner}>
      <IconSpinner />
    </div>
  )
}
