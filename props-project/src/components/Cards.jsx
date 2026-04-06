import React from 'react'
import {Bookmark} from 'lucide-react'
import './Cards.css'

const Cards = (props) => {
  return (
      <div className="">
        <div className="card">
          <div className="top">
            <img src={props.brandLogo} alt="" />
            <button>Save <Bookmark size={15} /> </button>
          </div>
          <div className="center">
            <h3 className="companyName">{props.companyName} <span>{props.datePosted}</span></h3> 
            <h3 className="workRole">{props.post}</h3>
            <div className="tags">
              <h3 className="tag1">{props.tag1}</h3>
              <h3 className="tag2">{props.tag2}</h3>
            </div>
          </div>
          <div className="bottom">
            <div className="perHour">
              <h3>{props.pay}</h3>
              <p className="address">{props.location}</p>
            </div>
            <div className="applyBtn">
              <button>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Cards
