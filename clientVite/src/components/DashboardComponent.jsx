import { useState } from "react";
import { initialTabs as tabs } from "./helper";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Dashboard.module.css";
import MyTable from "./MyTable";


export default function Dashboard( {columns, data} ) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedTable , setSelectedTable] = useState(0);
  console.log(data, columns);

  return (
    <div className={styles.window}>
      <nav>
        <ul>
          {/* Titulos */}
          {["coeficientes de tus numeros","coeficientes del 0 al 9","tabla de jugadores" , "crear jugada" , "modificar jugada"].map((item , idx) => (
            <li
              key={item}
              className={/* item === selectedTab ? */ styles.selected/*  : "" */}
              onClick={() => setSelectedTable(idx)}
            >
              {item}
              {idx=== selectedTable ? (
                <motion.div className={styles.underline} layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className={styles.main}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedTable ? selectedTable: "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {  
            <MyTable
             data = {columns[selectedTable]} 
             columns = {data[selectedTable]} 
            ></MyTable>}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
