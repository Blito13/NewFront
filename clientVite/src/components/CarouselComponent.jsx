import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
/* import { images } from "./image-data"; */
import styles from "./Carousel.module.css";
const texts = [
  "Tutti cuanti es un juego de apuestas de un numero de hasta 5 digitos y la ganancia es proporcional a la cantidad de aciertos",
  "Los aciertos son acumulativos desde la unidad hasta la decena de mil ",
  "Los numeros validos van desde el 0 hasta el 9",
  "Se sortean 2 veces por dia todos los dias UTC(18:00) ",
  "A ganar"
];
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

 const CarouselComponent= () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const textIndex = wrap(0, texts.length, page);
//entender bien el wrap este.
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={styles.exampleContainer}>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className={styles.divs}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <p>{texts[textIndex]}</p>
        </motion.div>
      </AnimatePresence>
      <div className={styles.prev} onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className={styles.next} onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </div>
    
  );
};
export default CarouselComponent;