import styles from "./bookingcard.module.css"

interface props{
  
psgName:String,
psgPhone:number,
psgClass:String,
psgSeat:String
psgStatus:String
psgId:number
onCancel: () => void;

  }






const BookingCard = (props:props) =>{

 console.log(props.psgId);

 const handleCancel = async () => {
  if (
    window.confirm('Are you sure you want to cancel this booking?')
  ) {
    if (
      props.psgId !== undefined &&
      typeof props.psgId === 'number' &&
      props.psgId > 0
    ) {
      try {
        // Call the onCancel function passed from the parent component
        props.onCancel();

        const response = await fetch('/api/bookings', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: props.psgId }), // Ensure the 'id' is included in the request body
        });

        if (!response.ok) {
          console.log('Error updating passenger status : ', response.status);
          return;
        }

        console.log('Passenger status updated successfully');
      } catch (error) {
        console.error('Error updating passenger status:', error);
      }
    } else {
      console.error('Invalid props.psgId:', props.psgId);
      // Handle the case where props.psgId is not valid (e.g., log an error or show a message)
    }
  }
};

    return(
        <div className={styles.bookingGrand}>
            <div className={styles.bookingParent}>
                <div className={styles.abouttrain}>
                    <div className={styles.namesSet}>
                    <div className={styles.trainName}>Mango Express</div>
                    <div className={styles.passengerName}>12234</div>
                    </div>
                    <div className={styles.statusCheck}>
                    {props.psgStatus === 'scheduled' ? (
              <div className={styles.trainStatus}>{props.psgStatus}</div>
            ) : (
              <div className={` ${styles.cancelledStatus}`}>{props.psgStatus}</div>
            )}
            {props.psgStatus !== 'cancelled' && (
              <div className={styles.cancelTicket}>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            )}
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