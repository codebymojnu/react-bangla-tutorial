import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo_container}>
      <span className={styles.logo_first_letter}>React</span>
      <span className={styles.logo_second_letter}>Bangla Tutorial</span>
    </div>
    )
}

export default Logo;