import React from 'react'
import { Link } from 'gatsby-plugin-intl'
import styles from './navigation.module.css'
import Language from './language'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
    <Language />
  </nav>
)
