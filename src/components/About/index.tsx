import "./about.css";
import avatar from "../../assets/images/avatar.jpg";
import { Grid } from "@mui/material";
export const About: React.FC = () => {
  return (
    <section id="about">
      <Grid container className="row">
        <Grid item md={3} xs={12}>
          <img className="profile-pic" src={avatar} alt="" />
        </Grid>

        <Grid item md={9} xs={12} className="about_right">
          <h2>About Me</h2>
          <p>
            I am a senior student of Hanoi Polytechnic University, my major is
            Computer Engineering. I have expertise in Frondldldld. In terms of
            work experience, I have been working as a frontend developer intern
            at Sotatek SJC company for more than a year. I have basic knowledge
            of HTML, CSS, ReactJS, NextJS and also have a few personal projects
            using these technologies while studying in school.
          </p>

          <div>
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Nguyen Duc Dat</span>
                <br></br>
                <span>Nhan Hien, Hien Giang, Thuong Tin, Ha Noi</span>
                <br></br>
                <span>https://github.com/nguyenducdat157</span>
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};
