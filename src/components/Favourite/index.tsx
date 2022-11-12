// import { images } from "../../data.";
import op from "../../assets/images/op.png";
import chelsea from "../../assets/images/chelsea.png";
import coffee from "../../assets/images/coffee.jpg";
import fifa from "../../assets/images/fifa.png";
import mck from "../../assets/images/mck.webp";
import name from "../../assets/images/team.jpg";
import "./favourite.css";

const images = [
  { name: "Anime", src: op },
  { name: "Chelsea", src: chelsea },
  { name: "Coffee", src: coffee },
  { name: "Game", src: fifa },
  { name: "Rap", src: mck },
  { name: "Football", src: name },
];
export const Favourite: React.FC = () => {
  return (
    <section id="favourite">
      <div className="grid_container">
        {images.map((o) => {
          return (
            <div key={o.name} className="grid_item">
              <div className="grid_item_content">
                <p>{o.name}</p>
              </div>
              <img src={o.src} alt={o.name}></img>
            </div>
          );
        })}
      </div>
    </section>
  );
};
