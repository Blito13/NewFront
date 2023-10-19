import * as React from "react";
import { motion } from "framer-motion";
import styles from "./DataTable.module.css";
import { useEffect} from "react";
import { useSelector , useDispatch} from "react-redux";
import { getLoged, getLogedStatus ,  getPlayers} from "../redux/actions";

const DataTable = ({ data }) => {
/*   const dispatch = useDispatch();
  const token =  useSelector(state => state.token);
  const playersProm = useSelector(state => state.players)
  useEffect(()=>{
      return () =>{

          dispatch(getPlayers());
      }
  },[dispatch]) */
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
const itemE= {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <motion.tr
            key={index}
            /* layout */
            variants={container}
            initial="hidden"
            animate="visible"
            
          >
            <motion.td variants={itemE}>{item.name}</motion.td>
            <motion.td variants={itemE}>{item.age}</motion.td>
            <motion.td variants={itemE}>{item.email}</motion.td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;