import styles from "./bookingcard.module.css"

interface props{
  
psgName:String,
psgPhone:number,
psgClass:String,
psgSeat:String
    
  }






const BookingCard = (props:props) =>{
    return(
        <div className={styles.bookingGrand}>
            <div className={styles.bookingParent}>
                <div className={styles.abouttrain}>
                    <div className={styles.namesSet}>
                    <div className={styles.trainName}>Mango Express</div>
                    <div className={styles.passengerName}>12234</div>
                    </div>
                    <div className={styles.statusCheck}>
                        <div className={styles.tainStatus}>Scheduled</div>
                        <div className={styles.cancelTicket}>Cancel</div>
                    </div>
                  </div>  
                    <div className={styles.divider}></div>
                    <div className={styles.AboutandTimings}>
                        <div className={styles.departureSection}>
                        <div className={styles.headings}>DEPARTURE</div>
                        <div className={styles.placeName}>NAG-07:10</div>
                        <div className={styles.depDate}>Wed, 06 Dec</div>
                        <div className={styles.depPlaceName}>NAGPUR</div>
                        </div>
                        <div className={styles.durationSection}>
                        <div className={styles.headings}>DURATION</div>
                        <div className={styles.travelDuration}>DURATION</div>
                        </div>
                        <div className={styles.arrivalSection}>
                        <div className={styles.headings}>ARRIVAL</div>
                        <div className={styles.placeName}>PAT-05:10</div>
                        <div className={styles.depDate}>THU, 07 Dec</div>
                        <div className={styles.depPlaceName}>PATNA</div>
                        </div>
                    </div>
                    <div className={styles.divider}></div>
                        <div className={styles.PassengerThings}>
                        <div className={styles.passengerDetails}>
                            <div className={styles.passengerHead}>PASSENGER</div>
                            <div className={styles.passengername}>MR {props.psgName}</div>
                        </div>
                        <div className={styles.passengerPhoneDetail}>
                            <div className={styles.passengerPhone}>PHONE</div>
                            <div className={styles.passengername}>{props.psgPhone}</div>
                        </div>
                        <div className={styles.passengerPhoneDetail}>
                            <div className={styles.passengerBogie}>BOGIE</div>
                            <div className={styles.passengername}>{props.psgClass}</div>
                        </div>
                        <div className={styles.passengerSeatDetails}>
                            <div className={styles.passengerBogie}>SEAT</div>
                            <div className={styles.passengername}>{props.psgSeat}</div>
                        </div>
                        </div>
                       
                    
                
            </div>
        </div>
    )
}

export default BookingCard