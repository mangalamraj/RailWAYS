import Link from "next/link";
import styles from "./navabar.module.css"
const Navbar = () =>{
    return(
        <div className={styles.navbarGrandParent}>
            <div className={styles.navbarParent}>
            <Link href="/" style={{textDecoration:"none"}}>
                <div className={styles.navLogo}>
                <div>Rail</div><p>WAYS</p>
            </div></Link>

            <div className={styles.menuset}>
                <span className={styles.usernamespan}></span>
                <Link href="/login" style={{textDecoration:"none", color:"#EC5B24",fontWeight:"600"}}><div className={styles.loginBut}>Login/Signup</div></Link>
            </div>
            </div>
        </div>
    )
}

export default Navbar;