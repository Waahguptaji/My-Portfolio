import { Link } from "react-router-dom";
import "./style.css";
import sahilHD from "../images/sahilHD.png";
import sunshine from "../images/sunshine.png";
import send from "../images/send.png";
import ReactTyped from "react-typed";

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
              <ReactTyped
                strings={[
                  "Developer. ",
                  "Thinker. ",
                  "Writer. ",
                  "Avid Reader. ",
                ]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar=">"
                showCursor={true}
              />
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
