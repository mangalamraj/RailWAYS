"use client";
import { usePathname } from "next/navigation";
import styles from "./availabletrains.module.css"
const Availabletrains = () =>{
    const pathname = usePathname();
    const fromto = pathname.split("/").pop();
    return(
        <div className={styles.fromtoparent}>
            Hello {fromto}
        </div>
    )
}
export default Availabletrains;