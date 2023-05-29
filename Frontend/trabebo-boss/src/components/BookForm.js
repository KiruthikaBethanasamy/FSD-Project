import React from "react";
import "./Bookform.css";
import emailjs from "emailjs-com";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

const BookForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const customerId = location.state?.customerId || '';

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
    formData.append('customerId', customerId);
    const entityData = Object.fromEntries(formData.entries());

    axios
      .post("http://localhost:8081/api/books", entityData)
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
      <form className="form" onSubmit={handleOnSubmit}>
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
          <h3>Contact Number*</h3>
          <input
            type="tel"
            placeholder="Number"
            required
            maxLength="10"
            name="contact"
          />
        </div>
        <div className="inputbox">
          <h3>Enter Your destination*</h3>
          <input
            type="text"
            placeholder="Destination"
            required
            name="destination"
          />
        </div>
        <div className="inputbox">
          <h3>Enter the number of people</h3>
          <input
            type="number"
            min="1"
            max="15"
            placeholder="Number"
            required
            name="num"
          />
        </div>
        <div className="inputbox">
          <h3>Arrival</h3>
          <input type="date" required name="arrival" />
        </div>
        <div className="inputbox">
          <h3>Departure</h3>
          <input type="date" required name="departure" />
        </div>
        <div className="sub-btn">
          <button type="submit" className="subbtn">
            Book now
          </button>
        </div>
      </form>
    </>
  );
};

export default BookForm;