import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const View = () => {
  const [travels, setTravels] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [editTravelId, setEditTravelId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [newTravelName, setNewTravelName] = useState("");
  const [newTravelLocation, setNewTravelLocation] = useState("");
  const [newTravelPrice, setNewTravelPrice] = useState("");
  const [newTravelDescription, setNewTravelDescription] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [bookingInfo, setBookingInfo] = useState(null);

  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const response = await axios.get("http://localhost:8089/travel");
        setTravels(response.data);
      } catch (error) {
        console.error("Error fetching travels:", error);
      }
    };

    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:8085/book");
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchTravels();
    fetchBookings();
  }, []);

  const handleAddTravel = async () => {
    try {
      const newTravel = {
        name: newTravelName,
        location: newTravelLocation,
        price: newTravelPrice,
        description: newTravelDescription,
      };
      const response = await axios.post("http://localhost:8089/travels", newTravel);
      setTravels([...travels, response.data]);
      setNewTravelName("");
      setNewTravelLocation("");
      setNewTravelPrice("");
      setNewTravelDescription("");
    } catch (error) {
      console.error("Error adding travel:", error);
    }
  };

  const handleEditTravel = async (travelid, updatedTravel) => {
    try {
      const response = await axios.put(`http://localhost:8089/travels/${travelid}`, updatedTravel);
      const updatedTravels = travels.map((travel) => (travel.travelid === travelid ? response.data : travel));
      setTravels(updatedTravels);
    } catch (error) {
      console.error("Error editing travel:", error);
    }
  };

  const handleEditButtonClick = (travelid, name, location, price, description) => {
    setEditTravelId(travelid);
    setEditName(name);
    setEditLocation(location);
    setEditPrice(price);
    setEditDescription(description);
  };

  const handleEditInputChange = (event) => {
    setEditName(event.target.value);
  };

  const handleLocationInputChange = (event) => {
    setEditLocation(event.target.value);
  };

  const handlePriceInputChange = (event) => {
    setEditPrice(event.target.value);
  };

  const handleDescriptionInputChange = (event) => {
    setEditDescription(event.target.value);
  };

  const handleRetrieveBooking = async () => {
    try {
      const response = await axios.get(`http://localhost:8085/bookings/${customerId}`);
      setBookingInfo(response.data);
    } catch (error) {
      console.error("Error retrieving booking:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Travels</h1>
          {/* Rendering travels component */}
          {travels.map((travel) => (
            <div
              key={travel.travelid}
              style={{
                marginBottom: "20px",
                padding: "10px",
                backgroundColor: "#f5f5f5",
                borderRadius: "5px",
              }}
            >
              {editTravelId === travel.travelid ? (
                <div>
                  <input type="text" value={editName} onChange={handleEditInputChange} style={{ marginBottom: "10px", width: "100%" }} />
                  <input type="text" value={editLocation} onChange={handleLocationInputChange} style={{ marginBottom: "10px", width: "100%" }} />
                  <input type="text" value={editPrice} onChange={handlePriceInputChange} style={{ marginBottom: "10px", width: "100%" }} />
                  <input type="text" value={editDescription} onChange={handleDescriptionInputChange} style={{ marginBottom: "10px", width: "100%" }} />
                  <button onClick={() => handleEditTravel(travel.travelid, { name: editName, location: editLocation, price: editPrice, description: editDescription })} style={{ marginRight: "10px" }}>Save</button>
                  <button onClick={() => setEditTravelId(null)}>Cancel</button>
                </div>
              ) : (
                <div>
                  <h2 style={{ marginBottom: "5px" }}>{travel.name}</h2>
                  <p style={{ marginBottom: "5px" }}>Location: {travel.location}</p>
                  <p style={{ marginBottom: "5px" }}>Price: {travel.price}</p>
                  <p style={{ marginBottom: "5px" }}>Description: {travel.description}</p>
                  <button onClick={() => handleEditButtonClick(travel.travelid, travel.name, travel.location, travel.price, travel.description)}>Edit Travel</button>
                </div>
              )}
            </div>
          ))}
          <div style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: '24px', color: '#333' }}>Add Travel</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '20px' }}>
                <input type="text" value={newTravelName} onChange={(e) => setNewTravelName(e.target.value)} placeholder="Name" style={{ fontSize: '18px', color: '#555' }} /><br />
                <input type="text" value={newTravelLocation} onChange={(e) => setNewTravelLocation(e.target.value)} placeholder="Location" style={{ fontSize: '18px', color: '#555' }} /><br />
                <input type="text" value={newTravelPrice} onChange={(e) => setNewTravelPrice(e.target.value)} placeholder="Price" style={{ fontSize: '18px', color: '#555' }} /><br />
                <input type="text" value={newTravelDescription} onChange={(e) => setNewTravelDescription(e.target.value)} placeholder="Description" style={{ fontSize: '18px', color: '#555' }} /><br />
                <button onClick={handleAddTravel} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s' }}>Add</button>
              </div>
            </div>
          </div>
        </div>
        <Link to="/view1">
          <button
            style={{
              position: "absolute",
              top: "100px",
              right: "50px",
              padding: "10px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Bookings
          </button>
        </Link>
        <Link to="/view2">
          <button
            style={{
              position: "absolute",
              top: "100px",
              right: "200px",
              padding: "10px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Events and Tour Packages
          </button>
        </Link>
        <div style={{ marginTop: "40px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}></h1>
          {/* Rendering bookings component */}
          {bookings.map((booking) => (
            <div
              key={booking.bookingid}
              style={{
                marginBottom: "20px",
                padding: "10px",
                backgroundColor: "#f5f5f5",
                borderRadius: "5px",
              }}
            >
              <h2 style={{ marginBottom: "5px" }}>{booking.name}</h2>
              <br></br><p style={{ marginBottom: "5px" }}>Location: {booking.location}</p>
              <br></br><p style={{ marginBottom: "5px" }}>Price: {booking.price}</p>
              <br></br><p style={{ marginBottom: "5px" }}>Description: {booking.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default View;
