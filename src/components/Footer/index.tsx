import { socialLink } from "../../data.";
import "./footer.css";
export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="row">
        <ul className="social-links">
          {socialLink.map((item) => {
            return (
              <li>
                <a href={item.url}>
                  <i className={item.className} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="go-top">
        <a title="Back to Top" href="#home">
          <i className="icon-up-open" />
        </a>
      </div>
    </footer>
  );
};
