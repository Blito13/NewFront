import React, { useState } from "react";
import styles from "./Carousel.module.css"

function Carousel ({images}) {
const [currentimage , setCurrentImage] = useState(0);
const [animate , setAnimate]  = useState(false);

const nextImage = (e) => {
  e.preventDefault();
  setAnimate(true);
  setCurrentImage((currentimage + 1) % images.length);
  console.log(currentimage );
  setTimeout(()=>{

    setAnimate(false);
  },2000);
};

const prevImage = () =>{
  console.log(images.length)
  setCurrentImage((currentimage-1+images.length) % images.length);
  console.log("th" ,  currentimage);
  console.log("stata");
}

return (
<div className={styles.carousel}>
  <button className={styles.prevButton} onClick={e=>prevImage(e)}>
    Prev
  </button>
  <img className = {`${styles.carouselImage} ${animate === true? styles.animate : styles.carouselImage}`} src = {images[currentimage]} alt="carusel"/>
  <button className={styles.nextButton} onClick={nextImage}>
    Next
  </button>
</div>
)
}
export default Carousel;