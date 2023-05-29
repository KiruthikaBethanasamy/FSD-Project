import "./Services.css";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  const serviceInfoRow1 = [
    {
      header: "Best Flights",
      info:"",
      icon: "fas fa-plane-departure",
    },
    {
      header: "Best deals",
      info: "",
      icon: "fas fa-rupee-sign",
    },
    {
      header: "Railway Bookings",
      info: "",
      icon: "fas fa-subway",
    },
  ];
  const serviceInfoRow2 = [
    {
      header: "Food And Drinks",
      info: "",
      icon: "fas fa-utensils",
    },
    {
      header: "Hotels",
      info: "",
      icon: "fas fa-hotel",
    },
    {
      header: "Safe Travels",
      info: "",
      icon: "fas fa-clinic-medical",
    },
  ];

  return (
    <>
      <div className="container4">
        <section className="service" id="services">
          <h1>Have a look at our services!</h1>
          <div className="row2">
            {serviceInfoRow1.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
          <div className="row1">
            {serviceInfoRow2.map((element) => {
              return (
                <ServiceCard
                  header={element.header}
                  info={element.info}
                  icon={element.icon}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};