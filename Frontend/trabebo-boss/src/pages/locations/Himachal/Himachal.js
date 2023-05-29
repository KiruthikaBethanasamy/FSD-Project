import './Himachal.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { HimachalImages } from "../../../media/himachal/HimachalImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Himachal=()=>{
    const placeInfo = [
        {
          placeName: "Himachal",
          tagline: "The mountains are calling",
          
          desc: "Discover Himachal, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
        },
      ];
      const packageInfo = [
        {
          img: HimachalImages.dp1,
          location: "Shimla",
          price: "INR 4999",
          desc: "3 days and 2 nights Packages: Hotel:Carnival Travels: Adj travels Discover shimla, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: HimachalImages.dp2,
          location: "Kasol",
          price: "INR 4999",
          desc: "4 days and 3 nights Packages: Hotel:Akm resort Travels: Adj travels Discover Kasol, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: HimachalImages.dp3,
          location: "Manali",
          price: "INR 4999",
          desc: "3 days and 2 nights Packages: Hotel:Spark Travels: Sunshine travels Discover Manali, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: HimachalImages.dp4,
          location: "Mcleodganj",
          price: "INR 4999",
          desc: "3 days and 2 nights Packages: Hotel:Carnival Travels: Adj travels Discover Mcleodganj, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
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