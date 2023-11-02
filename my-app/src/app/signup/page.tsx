import Link from "next/link";
import styles from "./signup.module.css"

const Signup = () =>{
    return(
        <div className={styles.signupGrandParent}>
            <div className={styles.signupParent}>
                    <div className={styles.signupdiv}>Sign Up!</div>
                    <div className={styles.subheadsignup}>Dont have an account?</div>
                    <div>
                        <form>

                            <div><input placeholder="Name"></input></div>

                            <div><input placeholder="Username"></input></div>
                            
                            <div><input placeholder="Mobile"></input></div>

                            <div><input placeholder="Email"></input></div>

                            <div><input placeholder="Password"></input></div>

                            <div><input placeholder="Confirm Password"></input></div>
                            <button type="submit">SignUP!</button>

                            <div className={styles.loginRedirector}>
                                <div>Already have an account? <Link href="/login" style={{textDecoration:"none"}}><p style={{display:"inline", color:"#EC5B24"}}>Login</p></Link></div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default Signup;