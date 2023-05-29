import './Rajasthan.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { RajasthanImages } from "../../../media/rajasthan/RajasthanImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Rajasthan=()=>{
    const placeInfo = [
        {
          placeName: "Rajasthan",
          tagline: "Padharo mhare desh",
          desc: "Discover Rajasthan, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
        },
      ];
      const packageInfo = [
        {
          img: RajasthanImages.dp1,
          location: "Jaipur",
          price: "INR 4999",
          desc: "3 days and 2 nights Packages: Hotel:Carnival Travels: Adj travels. Discover Jaipur, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: RajasthanImages.dp2,
          location: "Udaipur",
          price: "INR 4999",
          desc: "7 days and 6 nights Packages: Hotel:Ocean Travels: Adj travels .Discover Udaipur, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: RajasthanImages.dp3,
          location: "Jaisalmer",
          price: "INR 4999",
          desc: "5 days and 4 nights Packages: Hotel:Carnival Travels: Adj travels.Discover Jaisalmer, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: RajasthanImages.dp4,
          location: "Jodhpur",
          price: "INR 4999",
          desc: "3 days and 2 nights Packages: Hotel:Sunshine Travels: Shakthi travels. Discover Jodhpur, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
      ];
    return(
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
    )
}