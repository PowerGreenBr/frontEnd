import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './Home.module.css';

const items = [
  <img src="https://i.imgur.com/V96FdnV.jpg" className={styles.img} />,
  <img src="https://i.imgur.com/R4S3PGP.jpg" className={styles.img} />,
  <img src="https://i.imgur.com/gUXbaZZ.jpg" className={styles.img} />,
  <img src="https://i.imgur.com/dcUnvaU.jpg" className={styles.img} />,
  <img src="https://i.imgur.com/vpCvw2t.jpg" className={styles.img} />
 
]
export default function Carousel() {

  const style = {
    0:{
      items: 1
    },
    568: {
      items: 3
    },
    1024: {
      items: 5,
      itemsFit: 'contain'
    }
  }

  return (
    <AliceCarousel
      items = {items}
      autoPlay
      autoPlayStrategy="default"
      autoPlayInterval={1000}
      animationDuration={2000}
      animationType="fadeout"
      infinite
      touchTracking={true}
      responsive = {style}
      disableDotsControls
      disableButtonsControls

    />
  )
}
