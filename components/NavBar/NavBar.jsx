import styles from './NavBar.module.css'

import React from 'react'

function NavBar() {
  return (
    <div className={styles.nav}>
        <div className={styles.heading}>
            <h1>Trending Posts</h1>
        </div>
        <div className={styles.icon_text}>
            <a href="#"><i class="fa-solid fa-filter  fa_size" className={styles.fa_color}></i><span>  Filter by Category</span></a>
        </div>
        <div className={styles.containers}>
            <ul>
                    <li className={styles.ele1_color}><a href="#">All</a></li>
                    <li><a href="#"> Intelligence</a></li>
                    <li><a href="#">Cloud Computing</a></li>
                    <li><a href="#">Devops</a></li>
                    <li><a href="#">Programming Language</a></li>
                    <li><a href="#">Mobile Application Development</a></li>
                    <li><a href="#">Technology and Tools</a></li>
                    <li><a href="#">Get a Job in a Tech Company</a></li>
                    <li><a href="#">Others</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar;