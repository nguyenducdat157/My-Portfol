import { Grid } from "@mui/material";
import SliderSkill from "../Slider";
import "./resume.css";
export const Resume: React.FC = () => {
  return (
    <section id="resume">
      <Grid container className="row education">
        <Grid item md={3} xs={12}>
          <h1>
            <span>Education</span>
          </h1>
        </Grid>

        <Grid item md={9} xs={12} className="resume_detail">
          <div className="row ">
            <div>
              <h3>Hanoi University of Science and Technology</h3>
              <p className="info">
                <span>&bull;</span> Major:
                <span className="info_detail">Computer Engineering</span>
              </p>
              <p className="info">
                <span>&bull;</span> CPA:
                <em className="info_detail">3.5</em>
              </p>
              <p className="info">
                <span>&bull;</span> Graduation:
                <em className="info_detail">Aug 2023</em>
              </p>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container className="row work">
        <Grid item md={3} xs={12}>
          <h1>
            <span>Work</span>
          </h1>
        </Grid>

        <Grid item md={9} xs={12} className="resume_detail">
          <div className="row item">
            <div>
              <h3>Sotatek JSC</h3>
              <p className="info">
                <span>&bull;</span> Position:
                <span className="info_detail">Frontend Developer</span>
              </p>
              <p className="info">
                <span>&bull;</span> Time:
                <span className="info_detail">Jun 2021 - present</span>
              </p>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container className="row skill">
        <Grid item md={3} xs={12}>
          <h1>
            <span>Skills</span>
          </h1>
        </Grid>

        <Grid item xs={12} md={9} className="resume_detail">
          <div className="row item">
            <div>
              <h3>General</h3>
              <p className="info">
                <span>&bull;</span> Programmer Language:
                <span className="info_detail">
                  Javascript, Java, Typescript, C++
                </span>
              </p>

              <p className="info">
                <span>&bull;</span> Frameworks:
                <span className="info_detail">ReactJS, NextJS, NodeJS</span>
              </p>
              <p className="info">
                <span>&bull;</span> Tool:
                <span className="info_detail">VSCode, Github, JIRA</span>
              </p>
            </div>
          </div>

          <div className="row item">
            <div>
              <h3>Detail</h3>
              <p className="info detail_skill">
                <span style={{ width: "20%" }}>&bull; HTML</span>
                <SliderSkill value={80} />
              </p>
              <p className="info detail_skill">
                <span style={{ width: "20%" }}>&bull; CSS</span>
                <SliderSkill value={84} />
              </p>
              <p className="info detail_skill">
                <span style={{ width: "20%" }}>&bull; JS</span>
                <SliderSkill value={90} />
              </p>
              <p className="info detail_skill">
                <span style={{ width: "20%" }}>&bull; ReactJS</span>
                <SliderSkill value={50} />
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};
