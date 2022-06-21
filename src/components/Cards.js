import Data from "../Data";
import { FaMapPin } from "react-icons/fa";

export default function Cards() {
  const cards = Data.map((card) => {
    return (
      <section className="card_container">
        <img src={card.image} className="card_img" />

        <div className="card_info">
          <div className="card_info_header">
            <FaMapPin size={20} className="card_pin_logo" alt="pin" />
            <p className="card_location">{card.location}</p>
            <a href={card.mapsLink} target="_blank" rel="nofollow">
              View on Google Maps
            </a>
          </div>

          <h1 className="card_bandName">{card.title}</h1>
          <p className="card_date">{card.date}</p>
          <p className="card_text">{card.description}</p>
        </div>
      </section>
    );
  });

  return (
    <>
      {cards}
    </>
  )
}
