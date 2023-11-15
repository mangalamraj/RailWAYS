import React from 'react'
import './traincard.css'
import Link from 'next/link'

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




const TrainCard = (props:props) => {
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

   <div className="tc_bknow" ><Link className="tc_link" href={`/booktrain/[train_no]`} as={`/booktrain/${props.trainNo}`}>Book Now</Link></div>
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

export default TrainCard