import './Goa.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { GoaImages } from "../../../media/goa/GoaImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Goa=()=>{
    const placeInfo = [
        {
          placeName: "Goa",
          
          tagline: "The mountains are calling",
          desc: "Discover Goa, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
        },
      ];
      const packageInfo = [
        {
          img: GoaImages.dp1,
          location: "Baga",
          price: "INR 4999",
          desc: "The most famous and happening beach in Goa, Baga is known for its pulsating beach parties, exciting nightlife and delicious seafood. It is the perfect place to indulge in water sports and enjoy a sunbath during the day and dance to foot-tapping music at night, all in the company of a lively crowd.",
        },
        {
          img: GoaImages.dp2,
          location: "Calangutei",
          price: "INR 4999",
          desc: " Termed as the Queen of Beaches in Goa, Calangute’s drawcard is its shimmering golden sand and the whimsical rise and fall of waves. Peppered with sun lounges, cool restaurants, clubs and shacks, the beach is a traveller’s delight",
        },
        {
          img: GoaImages.dp3,
          location: "Anjuna ",
          price: "INR 4999",
          desc: " Anjuna is a 30-km long beach that features unusual rock formations and towering palm trees. Happening nightclubs, pubs and Saturday night bazaar make it one of the most popular places to visit in Goa at night.",
        },
        {
          img: GoaImages.dp4,
          location: "Arambol",
          price: "INR 4999",
          desc: "Arambol counts among the gorgeous beaches in Goa and for all the right reasons. A distinct Bohemian vibe and a string of budget accommodation options add to the popularity of the place.",
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