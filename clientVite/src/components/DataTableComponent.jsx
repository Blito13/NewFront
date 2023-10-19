import * as React from "react";
import { motion } from "framer-motion";
import styles from "./DataTable.module.css";
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

const dataItems = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const DataTableComponent = ({data}) => {
    const dispatch = useDispatch();
    const token =  useSelector(state => state.token);
    const playersProm = useSelector(state => state.players)
    useEffect(()=>{
        return () =>{

            dispatch(getPlayers());
        }
    },[dispatch])
    return (
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <motion.tbody
      layout
      variants = {container}
      initial= "hidden"
      animate="visible"
      >
        {data.map((item, index) => (
          <motion.tr
            key={index}
            layout
            variants = {dataItems}
          >
            <td layout >{item.name}</td>
            <td layout >{item.age}</td>
            <td layout >{item.email}</td>
          </motion.tr>
        ))}
      </motion.tbody>
    </table>
  /* <motion.ul
    className={styles.container}
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {[0, 1, 2, 3, 5, 6, 7, 8].map((index) => (
      <motion.li key={index} className={styles.item} variants={item} />
    ))}
  </motion.ul> }*/
    )
    };
export default DataTableComponent;