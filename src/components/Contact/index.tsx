import { socialLink } from "../../data.";
import "./contact.css";
export const Contact: React.FC = () => {
  return (
    <section id="contact">
      <div className="row">
        <div>
          <p className="lead">Contact me through the following channels</p>
        </div>
      </div>
      <div className="row">
        <aside>
          {socialLink.map((o) => (
            <div className="contact_url">
              <h4>{o.name}:</h4>
              <a href={o.url} target="_blank" rel="noreferrer">
                {o.url}
              </a>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
};
