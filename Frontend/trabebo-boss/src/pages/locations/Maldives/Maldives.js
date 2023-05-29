import './Maldives.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { MaldivesImages } from "../../../media/maldives/MaldivesImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Maldives=()=>{
    const placeInfo = [
        {
          placeName: "Maldives",
          tagline: "Always Natural",
          desc: "Discover Maldives, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
        },
      ];
      const packageInfo = [
        {
          img: MaldivesImages.dp1,
          location: "Mafushi",
          price: "INR 4999",
          desc: "3 days and 2 nights Packages: Hotel:Carnival Travels: Adj travels.Discover Mafushi, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: MaldivesImages.dp2,
          location: "Male",
          price: "INR 4999",
          desc: "6 days and 5 nights Packages: Hotel:Aqua resort Travels: Plaza travels.Discover Male, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: MaldivesImages.dp3,
          location: "Huluhumale",
          price: "INR 4999",
          desc: "3 days and 2 nights Packages: Hotel:Carnival Travels: Adj travels.Discover Huluhumale, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: MaldivesImages.dp4,
          location: "Bodhufuludoo",
          price: "INR 4999",
          desc: "8 days and 7 nights Packages: Hotel:Ocean spray Travels: Heaven travels.Discover Bodhufuludoo, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
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