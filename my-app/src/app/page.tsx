import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.grandParent}>
        <div className={styles.parent}>
          <div className={styles.homeChild}>
          <div style={{marginTop: "1em"}}>Train Ticket Booking</div>
          <p>Book Your tain at best price!</p>
          <div className={styles.destinationformParent}>
            <form className={styles.destinationForm}>  
            <input type='text' placeholder=' Leaving From'></input>
            <div><img src='images/signpost.png' width="30px"></img></div>
            <input type='text' placeholder=' Leaving To'></input>
            <input type='date' value="2001-06-26"></input>
            <button>BOOK!</button>
            </form>
        

          </div>
          </div>

        </div>
    </div>
  )
}
