"use client";
import './trainadmincard.css'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


interface props{
  name:String,
  trainNo:String,
  stDest:String,
  stTime:String,
  edDest:String,
  edTime:String,
  s_1a:String,
  s_2a:String,
  s_3a:String,
  s_sl:String,
  ts_1a:String,
  ts_2a:String,
  ts_3a:String,
  ts_sl:String,  
}

const TrainAdminCard = (props:props) => {
  const [open, setOpen] = React.useState(false);
  const [train_no, changeTrainNumber] = useState<number | string>("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter()
  const HandletrainNumberChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const value = e.target.value;
    changeTrainNumber(value === "" ? "" : parseInt(value, 10));

  }

  const onclick =async(e:React.ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try{
      const response= await fetch(`http://localhost:3000/api/removetrain/train_no?train_no=${train_no}`,{
        method:"DELETE"
      })
        
      if(response.ok){
        router.push("/admin");
    }else{
        console.log("Deletion Failed")
    }
    }catch(e){
      console.log(e);
    }
  }
  

  const modalStyle = {
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const modalContentStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '400px',

    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:"1em" ,// Ensure the content is displayed as a block
    marginBottom: '20px', // Add some space between heading and content
  };

  const textFieldStyle = {
    marginBottom: '16px',
  };
  return (
    <div className="tc_main">

<div className="tc_sub_main1">
  <div className="tc_sub_head">
<div className="tc_details">
    <div className="tc_d_number"><h3>{props.trainNo}</h3> </div>
    <div className="tc_d_name"><h3>{props.name}</h3></div>
</div>
<div className="tc_dates">Runs on: S M T W T F S • <span>(12904) running status</span></div>
  </div>
  <div className="tc_o_details">
   <div className="tc_sub_main2">
    <div className="tc_st">
    <div className="st_d">{props.stDest}</div>
    <div className="st_t">{props.stTime}</div>
    <div className="st_w">Sat, 4 Nov</div>
   </div>
   <div>
    <div className="timelength">15hr 41min</div>
    <div className="timeline_div">•-------------•</div>
   </div>
   <div className="tc_ed">
    <div className="ed_d">{props.edDest}</div>
    <div className="ed_t">{props.edTime}</div>
    <div className="ed_w">Sat, 4 Nov</div>
   </div>

   <div className="tc_bknow"><button className="tc_link" onClick={handleOpen}>Remove</button></div>
   <div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={modalStyle}
      >
        <Box sx={modalContentStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Train Modal
          </Typography>
          <form style={{display:'flex',flexDirection:'column',gap:'1em'}} onSubmit={onclick} >
            <label htmlFor="trainNumber">Train Number:</label>
            <div>
            <input
              type="text"
              id="trainNumber"
              placeholder="Enter Train Number"
              style={{height:"25px",width:'200px'}}
              required
              value={train_no}
              onChange={HandletrainNumberChange}
            />
            </div>
            <div>
            <Button variant="contained" color="primary" style={{width:'200px',backgroundColor:'#f58c4b'}} type='submit'>
              Delete
            </Button>
            </div>
            
          </form>
        </Box>
      </Modal>
    </div>
  </div>
  </div>
</div>
<hr className="tc_main_divider"/>
<div className="tc_sub_main1b">
<div className="tc_class">
    <div className="tc_pricing">SL • $550</div>
    <div className="tc_status">AVL {props.s_sl}</div>
</div>
<div className="tc_class_wt">
    <div className="tc_pricing_wt">2A • $550</div>
    <div className="tc_status_wt">WL {props.s_2a}</div>
</div>
<div className="tc_class">
    <div className="tc_tatkal">Tatkal</div>
    <div className="tc_pricing">3A • $550</div>
    <div className="tc_status">AVL {props.ts_3a}</div>
</div>
<div className="tc_class">
    <div className="tc_pricing">1A • $550</div>
    <div className="tc_status">AVL {props.s_1a}</div>
</div>
<div className="tc_class">
    <div className="tc_pricing">3A • $550</div>
    <div className="tc_status">WL {props.s_3a}</div>
</div>
<div className="tc_class">
<div className="tc_tatkal">Tatkal</div>
    <div className="tc_pricing">SL • $550</div>
    <div className="tc_status">AVL {props.ts_sl}</div>
</div>
</div>




    </div>
  )
}

export default TrainAdminCard