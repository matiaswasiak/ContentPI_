// Dependencies
import React, { ReactElement, memo } from 'react'

// Components
import Link from 'next/link'

// Styles
import styles from './Logo.scss'

const Logo = (): ReactElement => {
  return (
    <div className={styles.logo}>
      <Link href="/dashboard">
        <a>
          <img src="/images/logo.png" alt="Logo" />
        </a>
      </Link>
    </div>
  )
}

export default memo(Logo)
