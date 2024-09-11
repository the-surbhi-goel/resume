import React from "react";
import "./home.css";

export default function Home(props) {
  const { theme } = props;
  const expYears = () => {
    var ageDifMs = Date.now() - new Date("31 July 2014");
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div className={`mt-70 row text-${theme.text}`}>
      <div className="col-md-3 col-12 text-center">
        <img
          className="profile-img"
          src={require(`../../assets/images/profile/profile.jpeg`)}
          alt="not available"
        />
        <div className="contact-no">+91-9996161917</div>
      </div>
      <div className="col-md-9 col-12" >
        <p>
          {expYears()}+ years of successful experience in Front-end technologies. Recognized
          consistently for performance excellence and contributions to success in previous
          companies. I have honed my skills in Angular, React, HTML, CSS, JavaScript, etc and I have
          a deep understanding of responsive design principles. I also tried my hands on express JS.
          I can translate design concepts into functional and visually appealing user interfaces. I
          have successfully delivered numerous projects ranging from small-scale to complex
          applications.
        </p>

        <h3 className="mt-5">Personal Details</h3>

        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <img
                  className="icon-img"
                  src={require(`../../assets/images/profile/gmail.png`)}
                  alt="not available"
                />
              </td>
              <td>
                <span>surbhigoel555@gmail.com</span>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="icon-img"
                  src={require(`../../assets/images/profile/linkedin.png`)}
                  alt="not available"
                />
              </td>
              <td>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/surbhi-goel-front-end-lead/"
                  target="_blank"
                >
                  https://www.linkedin.com/in/surbhi-goel-front-end-lead/
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  className="icon-img"
                  src={require(`../../assets/images/profile/github.png`)}
                  alt="not available"
                />
              </td>
              <td>
                <a rel="noreferrer" href="https://github.com/the-surbhi-goel" target="_blank">
                  https://github.com/the-surbhi-goel
                </a>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
}
