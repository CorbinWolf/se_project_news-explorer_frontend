import portrait from "../../assets/portrait.jpg";

import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <img src={portrait} alt="Portrait" className="about__portrait" />
        <div className="about__desc">
          <h2 className="about__header">About the author</h2>
          <p className="about__article">
            Hi! My name's Corbin Wolf and I'm a Full-Stack Software Engineer. I
            can utilize HTML, CSS, JavaScript, React, and Vite for front-end
            development. I can create back-ends with Node.js, manage databases
            with MongoDB, and route users with Nginx.
          </p>
          <p className="about__article">
            I had a decent grasp on HTML, CSS, and JavaScript, but TripleTen's
            Software Engineering course took my skills to the next level. With
            the tools that I've gained, I can build a web application to any
            design seen fit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
