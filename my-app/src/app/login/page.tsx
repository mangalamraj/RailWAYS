import Link from "next/link";
import styles from "./login.module.css"

const Login = () =>{
    return(
        <div className={styles.signupGrandParent}>
            <div className={styles.signupParent}>
                    <div className={styles.signupdiv}>Login</div>
                    <div className={styles.subheadsignup}>Start Booking Your Destination!</div>
                    <div>
                        <form>

                            <div><input placeholder="Username"></input></div>
                            
                            <div><input placeholder="Password"></input></div>


                            <button type="submit">Login!</button>

                            <div className={styles.loginRedirector}>
                                <div>Dont have an account? <Link href="/signup" style={{textDecoration:"none"}}><p style={{display:"inline", color:"#EC5B24"}}>Signup</p></Link></div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default Login;