import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  const openWhatsapp = () => {
    var phoneNumber = "9653936286";
    var url = "https://wa.me/" + phoneNumber;

    // Open WhatsApp in a new tab/window
    window.open(url, "_blank");
  };

  return (
    <div>
      {/* <div className="polygon-Background"></div> */}
      <div className="mainBg">
        <div className="contact-sub-container">
          <div className="img">
            {/* <!-- <img src="./images/sahil1.png" alt="Sahil Photo"> --> */}
          </div>
          <div className="content">
            <h1>
              <div className="nameContainer-contact">
                <span className="firstName-contact">
                  <span className="firstLetter">S</span>
                  <span className="firstLetter">a</span>
                  <span className="firstLetter">h</span>
                  <span className="firstLetter">i</span>
                  <span className="firstLetter">l</span>
                </span>
                <div className="lastName-contact">
                  <span className="lastLetter">G</span>
                  <span className="lastLetter">u</span>
                  <span className="lastLetter">p</span>
                  <span className="lastLetter">t</span>
                  <span className="lastLetter">a</span>
                </div>
              </div>
            </h1>
            <p>Find me on:</p>
            <div className="socialLinks">
              <ul className="social-links-list">
                <li>
                  <a href="https://twitter.com/waahguptaji" target="_blank">
                    <i
                      className="fa-brands fa-twitter"
                      style={{ color: "#a45959", paddingRight: "30px" }}
                    ></i>
                    @waahguptaji
                  </a>
                </li>
                <li>
                  <a href="https://github.com/waahguptaji" target="_blank">
                    <i
                      className="fa-brands fa-github"
                      style={{ color: "#a45959", paddingRight: "30px" }}
                    ></i>
                    @waahguptaji
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/waahguptaji" target="_blank">
                    <i
                      className="fa-brands fa-linkedin"
                      style={{ color: "#a45959", paddingRight: "30px" }}
                    ></i>
                    @waahguptaji
                  </a>
                </li>
                <li>
                  <a href="mailto:sahilgupta742@gmail.com">
                    <i
                      className="fa-regular fa-envelope"
                      style={{ color: "#a45959", paddingRight: "30px" }}
                    ></i>
                    sahilgupta742@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="whatsApp">
              <button onClick={openWhatsapp} className="btn-contact">
                Let's Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
