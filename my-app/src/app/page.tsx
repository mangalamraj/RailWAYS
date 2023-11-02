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
          <div className={styles.bannerGrandParent}>
              <div className={styles.bannerParent}>
                <h2>Train Ticket Booking on RailWAYS</h2>
                <p>IRCTC Authorised Partener</p>
                <div>
                  <div style={{display:"flex", flexDirection:"row" ,gap:"3em",marginBottom:"2.5em"}}>
                    <div style={{display:"flex", flexDirection:"row",gap:"1em"}}>
                    <div><img src='	https://images.ixigo.com/image/upload/f_auto/train/ecb835b55223186c49d55750b422ed10-oscpe.png' width="60px"></img></div>
                    <div className={styles.bannerWrittenpart}>$0 Payment Gateway Fee on Payments <br></br>via UPI</div>
                    </div>
                    <div style={{display:"flex", flexDirection:"row",gap:"1em"}}> 
                    <div><img src='	https://images.ixigo.com/image/upload/f_auto/801ca10aa0964d95bdcd76df1573b5e1-hlzsy.png' width="60px"></img></div>
                    <div className={styles.bannerWrittenpart}>Free Cancellation on RailWAYS</div>
                    </div>

                  </div>
                  
                  <div style={{display:"flex", flexDirection:"row",gap:"9.8em"}}>
                    <div style={{display:"flex", flexDirection:"row",gap:"1em"}}>
                    <div><img src='	https://images.ixigo.com/image/upload/f_auto/train/a21427142a38e7331574b034aa4a687a-lwpxr.png' width="60px"></img></div>
                    <div className={styles.bannerWrittenpart}>Instant Refund at RailWAYS</div>
                    </div>
                    <div style={{display:"flex", flexDirection:"row",gap:"1em"}}>
                    <div><img src='		https://images.ixigo.com/image/upload/f_auto/train/d522fcf3866c18b343060ab3cb49b3b1-xnmqx.png' width="60px"></img></div>
                    <div className={styles.bannerWrittenpart}>24/7 Support for Train Ticket </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
        </div>
        
    </div>
  )
}
