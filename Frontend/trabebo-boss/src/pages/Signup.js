import React from "react";
import "./Signup.css";
import emailjs from "emailjs-com";
import axios from "axios";
import "./Book.css";
import bookImg from '../media/booking.png';
export const Signup = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Send email using emailjs
    emailjs
      .sendForm(
        "service_ovl2n1s",
        "template_ctlgwz2",
        e.target,
        "QT5ltA7BuoH7IMiRu"
      )
      .then(
        (result) => {
          // Email sent successfully
          alert("Booking request placed! We will contact you shortly.");
        },
        (error) => {
          // An error occurred while sending email
          alert("Signed Up!");
        }
      );

    // Post form data using axios
    const formData = new FormData(e.target);
    const entityData = Object.fromEntries(formData.entries());

    axios
      .post("http://localhost:8088/admins", entityData)
      .then((response) => {
        // Data posted successfully
        console.log(response.data);
      })
      .catch((error) => {
        // An error occurred while posting data
        console.error(error);
      });

    e.target.reset();
  };

  return (
    <>
    <div style={{float: "right",
     width:"50%",
    top: "100px",
    right: "300px",
    padding: "50px",}}>
    <img src={bookImg} id="contactimg" alt={""}/>
  </div>
      <form className="form" onSubmit={handleOnSubmit}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '24px', color: '#333' }}>Sign Up</h2>
        </div>
        <div className="inputbox">
          <h3>Your Name*</h3>
          <input type="text" placeholder="Name" required name="name" />
        </div>
        <div className="inputbox">
          <h3>Email Address*</h3>
          <input
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            required
            
            name="email"
          />
        </div>
        <div className="inputbox">
          <h3>Password*</h3>
          <input
            type="password"
            placeholder="password"
            required
            maxLength="8"
            
            name="password"
          />
        </div>
        <div className="inputbox">
          <h3>Confirm Password*</h3>
          <input
            type="password"
            placeholder="Confirm password"
            required
            name="confirmPassword"
          />
        </div>
        <div className="inputbox">
          <h3>Company name</h3>
          <input
            type="text"
            placeholder="Company name"
            required
            name="companyName"
          />
        </div>
        <div className="inputbox">
          <h3>Location</h3>
          <input type="text" placeholder="Location" required name="location" />
        </div>
        <div className="inputbox">
          <h3>Phone</h3>
          <input type="text" placeholder="Phone" required name="phone" />
        </div>
        <div className="sub-btn">
          <button type="submit" className="subbtn">
            Sign up
          </button>
        </div>
       
          
      </form>
     
    </>
  );
};