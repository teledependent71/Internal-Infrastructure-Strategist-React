import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Old Glaring Gorilla</title>
        <meta property="og:title" content="Old Glaring Gorilla" />
      </Helmet>
    </div>
  )
}

export default Home
