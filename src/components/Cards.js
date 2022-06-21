import Data from "../Data";
import Bleachers from "../assets/bleachers.jpg";
import { FaMapPin } from "react-icons/fa";

export default function Cards() {
  return (
    <section className="card_container">
      <img src={Bleachers} className="card_img" />
      <div className="card_info">
        <div className="card_info_header">
          <FaMapPin 
            size={30} 
            className="card_pin_logo" alt="pin" 
          />
          <p>St. Pete</p>
          <p>Link to venue</p>
        </div>

        <h1>Bleachers</h1>
        <p>Date</p>
        <p>
          Saw Bleachers on their stop in Florida after canceling the first tour
          due to concerns over the COVID-19 virus. Song highlights included:
          'Rollercoaster' 'Don't Take the Money' 'I Wanna Get Better'.
        </p>
      </div>
    </section>
  );
}
