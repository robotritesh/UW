import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", 
    "702dc474-c3f5-4c0e-bbdc-8eb0c31122ab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
       <div className="contact-col">
        <h3>Send us message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nesciunt quaerat. Accusamus expedita vel officiis eaque iure. Veritatis, mollitia id.</p>
        <ul>
            <li><img src={mail_icon} alt="" /> ptsnsuniversity@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91- 8269 006060</li>
            <li><img src={location_icon} alt="" />Pandit S. N. Shukla UniversityNear, Sarfa Dam Rd, Nawalpur, Shahdol, <br/> Madhya Pradesh India (484001)</li>
        </ul>
        </div> 

        <div className="contact-col">
            <form onSubmit={onSubmit} >
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name'
                required/>
                <label >Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your Phone number' required />
                <label >Write Your message here</label>
                <textarea type="message" rows='6' placeholder='Enter your messege' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div> 
      
    </div>
  )
}

export default Contact
