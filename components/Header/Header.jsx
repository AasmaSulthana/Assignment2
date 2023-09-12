import React from 'react'
import styles from '@/components/Header/Header.module.css'
function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.logoSection}>
            <div className={styles.logo}>Edyoda</div>
            <p className={styles.logoStories}>stories</p>
        </div>
        <div className={styles.rightBar}>
            <div className={styles.dropdown}>Explore Categories <span><i className="fa-solid fa-angle-down"></i></span></div>
            <div className={styles.mainTab}>Go To Main Website</div>
        </div>
    </div>
  )
}

export default Header;