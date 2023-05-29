import React, { useEffect, useState } from "react";
import axios from "axios";

const View2 = () => {
  const [events, setEvents] = useState([]);
  const [packages, setPackages] = useState([]);
  const [editEventId, setEditEventId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editDate, setEditDate] = useState("");
  const [newEventName, setNewEventName] = useState("");
  const [newEventLocation, setNewEventLocation] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const [editPackage_Id, setEditPackage_Id] = useState(null);
  const [editSource, setEditSource] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDestination, setEditDestination] = useState("");
  const [newPackageSource, setNewPackageSource] = useState("");
  const [newPackagePrice, setNewPackagePrice] = useState("");
  const [newPackageDestination, setNewPackageDestination] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8086/event");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    const fetchPackages = async () => {
      try {
        const response = await axios.get("http://localhost:8087/package");
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching tour packages:", error);
      }
    };

    fetchEvents();
    fetchPackages();
  }, []);

  const handleAddEvent = async () => {
    try {
      const newEvent = {
        name: newEventName,
        location: newEventLocation,
        date: newEventDate,
      };
      const response = await axios.post("http://localhost:8086/events", newEvent);
      setEvents([...events, response.data]);
      setNewEventName("");
      setNewEventLocation("");
      setNewEventDate("");
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  const handleEditEvent = async (eventid, updatedEvent) => {
    try {
      const response = await axios.put(`http://localhost:8086/events/${eventid}`, updatedEvent);
      const updatedEvents = events.map((event) => (event.eventid === eventid ? response.data : event));
      setEvents(updatedEvents);
    } catch (error) {
      console.error("Error editing event:", error);
    }
  };

  const handleEditEventButtonClick = (eventid, name, location, date) => {
    setEditEventId(eventid);
    setEditName(name);
    setEditLocation(location);
    setEditDate(date);
  };

  const handleEditEventNameChange = (event) => {
    setEditName(event.target.value);
  };

  const handleEditEventLocationChange = (event) => {
    setEditLocation(event.target.value);
  };

  const handleEditEventDateChange = (event) => {
    setEditDate(event.target.value);
  };

  const handleAddPackage = async () => {
    try {
      const newPackage = {
        source: newPackageSource,
        price: newPackagePrice,
        destination: newPackageDestination,
      };
      const response = await axios.post("http://localhost:8087/packages", newPackage);
      setPackages([...packages, response.data]);
      setNewPackageSource("");
      setNewPackagePrice("");
      setNewPackageDestination("");
    } catch (error) {
      console.error("Error adding tour package:", error);
    }
  };

  const handleEditPackage = async (package_Id, updatedPackage) => {
    try {
      const response = await axios.put(`http://localhost:8087/packages/${package_Id}`, updatedPackage);
      const updatedPackages = packages.map((pkg) => (pkg.package_Id === package_Id ? response.data : pkg));
      setPackages(updatedPackages);
    } catch (error) {
      console.error("Error editing tour package:", error);
    }
  };

  const handleEditPackageButtonClick = (package_Id, source, price, destination) => {
    setEditPackage_Id(package_Id);
    setEditSource(source);
    setEditPrice(price);
    setEditDestination(destination);
  };

  const handleEditPackageSourceChange = (event) => {
    setEditSource(event.target.value);
  };

  const handleEditPackagePriceChange = (event) => {
    setEditPrice(event.target.value);
  };

  const handleEditPackageDestinationChange = (event) => {
    setEditDestination(event.target.value);
  };

  return (
    <div style={styles.container}>
      <div style={styles.outerBox}>
        <div style={styles.eventsContainer}>
          
          <h1 style={styles.title}>Events</h1>
          {events.map((event) => (
            <div key={event.eventid} style={styles.event}>
              {editEventId === event.eventid ? (
                <div>
                  <input type="text" value={editName} onChange={handleEditEventNameChange} />
                  <input type="text" value={editLocation} onChange={handleEditEventLocationChange} />
                  <input type="date" value={editDate} onChange={handleEditEventDateChange} />
                  <button onClick={() => handleEditEvent(event.eventid, { name: editName, location: editLocation, date: editDate })}>
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <h2 style={styles.name}>{event.name}</h2>
                  <p style={styles.location}>Location: {event.location}</p>
                  <p style={styles.date}>Date: {event.date}</p>
                  <button
                    onClick={() =>
                      handleEditEventButtonClick(event.eventid, event.name, event.location, event.date)
                    }
                  >
                    Edit Event
                  </button>
                </div>
              )}
            </div>
          ))}
          <div style={styles.addEventContainer}>
            <h2 style={styles.addEventTitle}>Add Event</h2>
            <br></br><input
              type="text"
              value={newEventName}
              onChange={(e) => setNewEventName(e.target.value)}
              placeholder="Name"
            /><br></br>
            <br></br><input
              type="text"
              value={newEventLocation}
              onChange={(e) => setNewEventLocation(e.target.value)}
              placeholder="Location"
            /><br></br>
            <br></br><input
              type="date"
              value={newEventDate}
              onChange={(e) => setNewEventDate(e.target.value)}
              placeholder="Date"
            /><br></br>
            <br></br><button style={styles.viewButton} onClick={handleAddEvent}>Add</button>
          </div>
        </div>

        <div style={styles.packagesContainer}>
          <h1 style={styles.title}>Tour Packages</h1>
          {packages.map((pkg) => (
            <div key={pkg.package_Id} style={styles.package}>
              {editPackage_Id === pkg.package_Id ? (
                <div>
                  <input type="text" value={editSource} onChange={handleEditPackageSourceChange} />
                  <input type="text" value={editPrice} onChange={handleEditPackagePriceChange} />
                  <input type="text" value={editDestination} onChange={handleEditPackageDestinationChange} />
                  <button
                    onClick={() =>
                      handleEditPackage(pkg.package_Id, {
                        source: editSource,
                        price: editPrice,
                        destination: editDestination,
                      })
                    }
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <h2 style={styles.source}>{pkg.source}</h2>
                  <p style={styles.price}>Price: {pkg.price}</p>
                  <p style={styles.destination}>Destination: {pkg.destination}</p>
                  <button
                    onClick={() =>
                      handleEditPackageButtonClick(pkg.package_Id, pkg.source, pkg.price, pkg.destination)
                    }
                  >
                    Edit Package
                  </button>
                </div>
              )}
            </div>
          ))}
          <div style={styles.addPackageContainer}>
            <h2 style={styles.addPackageTitle}>Add Tour Package</h2>
            <br></br><input
              type="text"
              value={newPackageSource}
              onChange={(e) => setNewPackageSource(e.target.value)}
              placeholder="Source"
            /><br></br>
            <br></br><input
              type="text"
              value={newPackagePrice}
              onChange={(e) => setNewPackagePrice(e.target.value)}
              placeholder="Price"
            /><br></br>
            <br></br><input
              type="text"
              value={newPackageDestination}
              onChange={(e) => setNewPackageDestination(e.target.value)}
              placeholder="Destination"
            /><br></br>
            <br></br><button style={styles.viewButton} onClick={handleAddPackage}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  outerBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "80%",
  },
  eventsContainer: {
    marginRight: "50px",
  },
  packagesContainer: {},
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  viewButton: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#65A765",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  event: {
    marginBottom: "20px",
  },
  package: {
    marginBottom: "20px",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  location: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  date: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  source: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  price: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  destination: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  addEventContainer: {
    marginTop: "30px",
    
  },
  addEventTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  addPackageContainer: {
    marginTop: "30px",
  },
  addPackageTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
};

export default View2;