import React, { useState } from "react";
import styles from "./Carousel.module.css"

function Carousel ({images}) {
const [currentimage , setCurrentImage] = useState(0);
const [animationDirection , setAnimationDirection] = useState(false);

const nextImage = (e) => {
  e.preventDefault();
  setAnimationDirection(`${styles.animate}`);
  setCurrentImage((currentimage + 1) % images.length); 
  console.log(currentimage );
  setTimeout(()=>{
    setAnimationDirection(false);
  },1000);
};

const prevImage = (e) =>{
  e.preventDefault(); 
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
  <div className={styles.imgCont}>
  <img className = {`${styles.carouselImage} ${animationDirection}`} src = {images[currentimage]} alt="carusel"/>
  </div>
  <button className={styles.nextButton} onClick={nextImage}>
    Next
  </button>
</div>
)
};
export default Carousel;