import React from 'react'
import './traincard.css'

const TrainCard = () => {
  return (
    <div className="tc_main">

<div className="tc_sub_main1">
  <div className="tc_sub_head">
<div className="tc_details">
    <div className="tc_d_number"><h3>12904</h3> </div>
    <div className="tc_d_name"><h3>GOLDEN TEMPLE M</h3></div>
</div>
<div className="tc_dates">Runs on: S M T W T F S • <span>(12904) running status</span></div>
  </div>
  <div className="tc_o_details">
   <div className="tc_sub_main2">
    <div className="tc_st">
    <div className="st_d">NZM</div>
    <div className="st_t">04:00</div>
    <div className="st_w">Sat, 4 Nov</div>
   </div>
   <div>
    <div className="timelength">15hr 41min</div>
    <div className="timeline_div">•-------------•</div>
   </div>
   <div className="tc_ed">
    <div className="ed_d">ST</div>
    <div className="ed_t">19:41</div>
    <div className="ed_w">Sat, 4 Nov</div>
   </div>
  </div>
  </div>
</div>
<hr className="tc_main_divider"/>
<div className="tc_sub_main1b">
<div className="tc_class">
    <div className="tc_pricing">SL • $550</div>
    <div className="tc_status">AVL 301</div>
</div>
<div className="tc_class_wt">
    <div className="tc_pricing_wt">2A • $550</div>
    <div className="tc_status_wt">WL 15</div>
</div>
<div className="tc_class">
    <div className="tc_tatkal">Tatkal</div>
    <div className="tc_pricing">3A • $550</div>
    <div className="tc_status">AVL 301</div>
</div>
<div className="tc_class">
    <div className="tc_pricing">1A • $550</div>
    <div className="tc_status">AVL 301</div>
</div>
<div className="tc_class">
    <div className="tc_pricing">3A • $550</div>
    <div className="tc_status">WL 15</div>
</div>
<div className="tc_class">
<div className="tc_tatkal">Tatkal</div>
    <div className="tc_pricing">SL • $550</div>
    <div className="tc_status">AVL 301</div>
</div>
</div>




    </div>
  )
}

export default TrainCard