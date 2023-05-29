import "./Locations.css";
import himachal from "../media/himachalbg.jpg";
import dubai from "../media/dubai.jpg";
import europe from "../media/europebg.jpg";
import kerala from "../media/keralabg.jpg";
import maldives from "../media/himachalbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";
import { PackageCard } from "../components/PackageCard";
import { Searchbox } from "../components/Searchbox";
import { useState, useEffect } from "react";

export const Locations = () => {
           
  const packageInfoRow1 = [
    
    {
      place: "delhi",
      info: "Delhi, city and national capital territory, north-central India. The city of Delhi actually consists of two components: Old Delhi, in the north, the historic city; and New Delhi, in the south, since 1947 the capital of India",
      img: goa,
      price: "4000-5000 INR",
    },
    {
      place: "goa",
      info: "The magical land of Goa is a land of celebrations and festivities. Snuggled in the Konkan Coast Belt, It has a long coastline of approx 100 kilometers. Goa is primarily known for its beautiful beaches",
      img: kerala,
      price: "4000-5000 INR",
    },
    
    {
      place: "himachal",
      info: "Himachal is very popular for its national parks. These are home to rare and endangered animals. The most famous of these is Great Himalayan National Park, a UNESCO World Heritage Site.",
      img: himachal,
      price: "4000-5000 INR",
    },
    
    
    {
      place: "rajasthan",
      info: "Rajasthan is known for its historical hill forts & palaces, it is claimed as the best place for tourism-related to palaces. Umaid Bhawan Palace: It is the largest Royal Palace in Rajasthan. It is also one of the largest private residences in the world.",
      img: rajasthan,
      price: "4000-5000 INR",
    },
    
    {
      place: "dubai",
      info: "While Abu Dhabi is the capital of the UAE, Dubai is the most popular & populous city. Dubai is an excellent choice for a short getaway with the best shopping, fine dining and sporting events. Flaunting its glamorous infrastructure amid the Arabian desert",
      img: dubai,
      price: "4000-5000 INR",
    },
    
   
    {
      place: "maldives",
      info: "A tropical haven of white sand beaches, the Maldives is located in the south of Sri Lanka and is ideal for an adventure, honeymoon, or leisure holiday. The Maldives is an archipelago of 1,192 coral islands grouped into natural atolls. However, only 200 islands are inhabited.",
      img: maldives,
      price: "4000-5000 INR",
    },
 
  ];

  const [searchField, setSearchField] = useState("");
  const [places, setPlaces] = useState(packageInfoRow1);
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  useEffect(() => {
    const newfilteredPlaces = places.filter((place) => {
      return place.place.toLocaleLowerCase().includes(searchField);
    });

    setFilteredPlaces(newfilteredPlaces);
  }, [places, searchField]);

  const handleOnChange = (e) => {
    const search = e.target.value.toLocaleLowerCase();
    setSearchField(search);
  };
  return (
    <>
      <section className="packages">
        <div className="package-container">
          <h2>
            All Locations
            <hr />
          </h2>
          <Searchbox handleOnChange={handleOnChange} />

          <div className="p-row">
            {filteredPlaces.map((element) => {
              return (
                <PackageCard
                  placeName={element.place}
                  img={element.img}
                  info={element.info}
                  price={element.price}
                  location={element.place}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
