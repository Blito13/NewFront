import styles from "./ResponsiveTable.module.css";

const ResponsiveTable = (data)=> {
        console.log(data.data)
        const arreglo = ["Tus numeros" , "Total" , "Parcial" ,"Individual"]
    return (
        <div className={styles.tableMobile}>
            <div className={styles.row}>
                <div className={styles.columns}>
                    <div className={styles.header}>tus numeros</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>2</div>
                    <div className={styles.data}>4</div>
                    <div className={styles.data}>4</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>total</div>
                    <div className={styles.data}>455</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>Parcial</div>
                    <div className={styles.data}>sadasñdlkasñl del coco
                    dasdkñlaskdñlaksñdlañsdkañsld
                    </div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>Cifra</div>
                    <div className={styles.data}>unidad</div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.columns}>
                    <div className={styles.header}>tus numeros</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>2</div>
                    <div className={styles.data}>4</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>fiolfia</div>
                    <div className={styles.data}>Marre</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>Cuchu</div>
                    <div className={styles.data}>9</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>Cuchu</div>
                    <div className={styles.data}>9</div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.columns}>
                    <div className={styles.header}>tus numeros</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>2</div>
                    <div className={styles.data}>4</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>fiolfia</div>
                    <div className={styles.data}>Marre</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>Cuchu</div>
                    <div className={styles.data}>9</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>Cuchu</div>
                    <div className={styles.data}>9</div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.columns}>
                    <div className={styles.header}>tus numeros</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>2</div>
                    <div className={styles.data}>4</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>fiolfia</div>
                    <div className={styles.data}>Marre</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>Cuchu</div>
                    <div className={styles.data}>9</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>Cuchu</div>
                    <div className={styles.data}>9</div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.columns}>
                    <div className={styles.header}>tus numeros</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>2</div>
                    <div className={styles.data}>4</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>fiolfia</div>
                    <div className={styles.data}>Marre</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>Cuchu</div>
                    <div className={styles.data}>9</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>Cuchu</div>
                    <div className={styles.data}>9</div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.columns}>
                    <div className={styles.header}>tus numeros</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>2</div>
                    <div className={styles.data}>4</div>
                    <div className={styles.data}>4</div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.header}>Cuchu</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>9</div>
                    <div className={styles.data}>pocillo</div>
                </div>
            </div>
           
        </div>
    )
};
export default ResponsiveTable;