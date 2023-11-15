import { Link } from "react-router-dom";
import "./style.css";
import sahilHD from "../images/sahilHD.png";
import sunshine from "../images/sunshine.png";
import send from "../images/send.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="main_bg">
      <div className="mobileFlex">
        {/* <!-- Main Img --> */}
        <div className="mainImg">
          <div
            className="img-container"
            onmouseover="onHover()"
            onmouseout="offHover()"
          >
            <img class="imgMe" src={sahilHD} alt="sahil.png" />
          </div>
          <div className="sunrays-container">
            <img className="rays" src={sunshine} alt="sahil.png" />
          </div>
        </div>

        {/* <!-- Moving text and Name --> */}
        <div className="wholeContainer">
          <div className="nameContainer">
            <h1>
              <span className="first">Sahil</span>
              <span className="last">Gupta</span>
            </h1>
          </div>
          <div className="movingContainer">
            <i id="movingText">
              {"< "}I'm a{" "}
              {
                <TypeAnimation
                  sequence={[
                    "Developer.",
                    1000,
                    "Writer.",
                    1000,
                    "Thinker.",
                    1000,
                    "Avid Reader.",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  style={{ fontSize: "1 em" }}
                />
              }
            </i>
          </div>
          {/* <!-- Contact me Button mobile --> */}
          <div className="contact">
            <Link to="/Contact">
              <button className="mobileContact">Contact Me!</button>
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- Contact Me Button --> */}
      <div className="contact">
        <p>
          Contact Me!
          <Link className="link" to="/Contact">
            <img className="sendImg" src={send} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
