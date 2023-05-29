import React from "react";
import "./Signup.css";
import emailjs from "emailjs-com";
import axios from "axios";
import bookImg from '../media/booking.png';
export const RegisterPage = () => {
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
          alert("Booking request placed!");
        }
      );

    // Post form data using axios
    const formData = new FormData(e.target);
    const entityData = Object.fromEntries(formData.entries());
    for (let [key, value] of formData.entries()) {
      entityData[key] = value;
    }
    axios
      .post("http://localhost:8082/api/customers", entityData) // Updated endpoint URL to /customers
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
          <input type="text" placeholder="Name" required name="customerName" />
        </div>
        <div className="inputbox">
          <h3>Email Address*</h3>
          <input
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            required
            name="customerEmail"
          />
        </div>
        <div className="inputbox">
          <h3>Password*</h3>
          <input
            type="password"
            placeholder="Password"
            required
            maxLength="8"
            name="customerPassword"
          />
        </div>
        <div className="inputbox">
          <h3>Address*</h3>
          <input
            type="text"
            placeholder="Address"
            required
            name="customerAddress"
          />
        </div>

        <div className="inputbox">
          <h3>Mobile no</h3>
          <input type="text" placeholder="Mobile" required name="customerMobile" />
        </div>
        <div className="sub-btn">
          <button type="submit" className="subbtn">
            Sign up
          </button>
        </div>
      </form>
    </>
  );
  }