import React, { useState } from "react";
import styles from "./Carousel.module.css"

function Carousel ({images}) {
const [currentimage , setCurrentImage] = useState(0);
const [animationDirection , setAnimationDirection] = useState(false);
const nextImage = () => {
  setAnimationDirection(`${styles.animate}`);
  setCurrentImage((currentimage + 1) % images.length);
  setTimeout(()=>{
    setAnimationDirection(false);
  },1000);
};

const prevImage = () =>{ 
  setAnimationDirection(`${styles.animatedBack}`);
  setCurrentImage((currentimage-1+images.length) % images.length);
  setTimeout(()=>{
    setAnimationDirection(false);
  },1000);
}; 

return (
<div className={styles.carousel}>
  <button className={styles.prevButton} onClick={e=>prevImage(e)}>
    Prev
  </button>
  <img className = {`${styles.carouselImage} ${animationDirection}`} src = {images[currentimage]} alt="carusel"/>
  <button className={styles.nextButton} onClick={nextImage}>
    Next
  </button>
</div>
)
}
export default Carousel;