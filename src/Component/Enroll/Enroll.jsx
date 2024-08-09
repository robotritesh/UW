import React from 'react'
import './Enroll.css'
import white_arrow from '../../assets/white-arrow.png'
const Enroll = () => {
  return (
    <div className='enroll container cantainer'>
        <form ></form>
        <div className='row'>
            <div className="col-25">
                <label >Frist Name </label>
            </div>
            <div className="col-75">
                <input type="text" id='fname' name="firstname" placeholder='Your First Name' />
            </div>
        </div>
        <div className='row'>
            <div className="col-25">
                <label >Last Name </label>
            </div>
            <div className="col-75">
                <input type="text"  placeholder='Your Last Name' />
            </div>
        </div>
        <div className='row'>
            <div className="col-25">
                <label >Enrollment Number </label>
            </div>
            <div className="col-75">
                <input type="text"  placeholder='Your Enrollment Number' />
            </div>
        </div>
        <div className='row'>
            <div className="col-25">
                <label>Subject</label>
            </div>
            <div className="col-75">
                <input type="text"   placeholder='Your Subject Name' />
            </div>
        </div>
        <div className="row">
    <div className="col-25">
      <label >State</label>
    </div>
    <div className="col-75">
      <select>
        <option value="Madhya pradesh">Madhya Pradesh</option>
        <option value="Cg">Chhattisgarh</option>
        <option value="bihar ">Bihar</option>
      </select>
    </div>
  </div>
  <div className='row'>
            <div className="col-25">
                <label >District Name </label>
            </div>
            <div className="col-75">
                <input type="text" id='dist' name="dist" placeholder='Your Dist Name' />
            </div>
        </div>
        <div className="form-btn">
            <button className='btn dark-btn'>Submit your Form <img src={white_arrow} alt="" /></button>
        </div>
    </div>
    
  )
}

export default Enroll
