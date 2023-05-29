import "./Dubai.css";
import { TravelCard } from "../../../components/locations/TravelCard";
import { DubaiImages } from "../../../media/dubai/d_images";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";
export const Dubai = () => {
  const placeInfo = [
    {
      placeName: "Dubai",
      tagline: "The land of the kings",
      desc: "Discover Dubai, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
  ];
  const packageInfo = [
    {
      img: DubaiImages.dp1,
      location: "Burj Kalifa",
      price: "INR 4999",
      desc: "3 days and 2 nights Packages: Hotel:Carnival Travels: Adj travels.Discover Burj Kalifa, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
    {
      img: DubaiImages.dp2,
      location: "Dubai fountain",
      price: "INR 4999",
      desc: "4 days and 3 nights Packages: Hotel:Ananya Travels: ARR travels.Discover Dubai fountain, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
    {
      img: DubaiImages.dp3,
      location: "Burj al arab",
      price: "INR 4999",
      desc: "3 days and 2 nights Packages: Hotel:Carnival Travels: Adj travels.Discover Burj al arab, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
    {
      img: DubaiImages.dp4,
      location: "Emirates",
      price: "INR 4999",
      desc: "3 days and 2 nights Packages: Hotel:Carnival Travels: Adj travels.Discover Emirates, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
    },
  ];
  return (
    <>
      <div className="t-container">
        {placeInfo.map((place) => {
          return (
            <TravelCard
              name={place.placeName}
              tagline={place.tagline}
              desc={place.desc}
            />
          );
        })}
      </div>

      
      <hr id="line" />
      <div className="container3" id="packages">
        <section className="packages">
          <h2>Best deals for you</h2>
          <div className="outerbox">
            <div className="row1">
              {packageInfo.map((pack) => {
                return (
                  <PackCard
                    img={pack.img}
                    loc={pack.location}
                    price={pack.price}
                    desc={pack.desc}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <hr id="line" />

      <div className="container5" id="contact">
        <section className="t-contact">
          <h1>Book Your tickets</h1>
          <div className="rowlast">
            <div className="contimg">
              <img src={contactimg} alt={""} id="contimg" />
            </div>

            <div className="box">
              <h2>
                Book your tickets
                <hr />
              </h2>

              <p>
                One step away from booking your trip! What are you waiting for?
              </p>
              <Link to="/clogin">
                <div className="btn">
                  <button className="book-btn">Book now</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
