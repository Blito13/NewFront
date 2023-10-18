import * as React from "react";
import { motion } from "framer-motion";
import styles from "./DataList.module.css";
import { useEffect} from "react";
import { useSelector , useDispatch} from "react-redux";
import { getLoged, getLogedStatus ,  getPlayers} from "../redux/actions";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const DataListComponent = () => {
    const dispatch = useDispatch();
    const token =  useSelector(state => state.token);
    const playersProm = useSelector(state => state.players)
    useEffect(()=>{
        return () =>{

            dispatch(getPlayers());
        }
    },[dispatch])
    return (

  <motion.ul
    className={styles.container}
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {[0, 1, 2, 3, 5, 6, 7, 8].map((index) => (
      <motion.li key={index} className={styles.item} variants={item} />
    ))}
  </motion.ul>
    )
    };
export default DataListComponent;