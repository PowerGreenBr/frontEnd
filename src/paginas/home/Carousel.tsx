import React from 'react'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './Home.module.css';

const items = [
  <img src="https://i.imgur.com/b1fLVJH.png" className={styles.img} />,
  <img src="https://i.imgur.com/xPidwr1.png" className={styles.img} />,
   
 
]
export default function Carousel() {

  const style = {
    0:{
      items: 1
    },
    568: {
      items: 1
    },
    1024: {
      items: 1,
      itemsFit: 'contain'
    }
  }

  return (
    <AliceCarousel
      items = {items}
      autoPlay
      autoPlayStrategy="default"
      autoPlayInterval={2000}
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
