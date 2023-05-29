import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const CabService = () => {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const response = await axios.get("http://localhost:8089/travel");
        setTravels(response.data);
      } catch (error) {
        console.error("Error fetching cab services:", error);
      }
    };

    fetchTravels();
  }, []);

  const handleClick = () => {
    // Perform the desired action when the button is clicked
    console.log("Button clicked");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Travels</h1>
      {travels.map((service) => (
        <div key={service.id} style={styles.cabService}>
          <h2 style={styles.name}>{service.name}</h2>
          <p style={styles.location}>Location: {service.location}</p>
          <p style={styles.price}>Price: {service.price}</p>
          <p style={styles.description}>Description: {service.description}</p>
          <Link to ="/clogin">
      <button style={styles.button} onClick={handleClick}>
        Book
      </button>
      </Link>
        </div>
        
      ))}
      
    </div>
  );
};

export default CabService;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  cabService: {
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
  },
  name: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  location: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  price: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  description: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};