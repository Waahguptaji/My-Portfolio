import { Link } from "react-router-dom";
import "./blog.css";
import "./style.css";
import blog1 from "../images/who-am-img.jpeg";
import blog2 from "../images/Uncertain-img.png";
import blog3 from "../images/Zero-Sum.gif";
import blog4 from "../images/life-duo.png";

const Blogs = () => {
  return (
    <div className="mainContainer">
      <div className="blogContainer">
        <div className="blog-card card-1">
          <div className="inner-card">
            <a href="https://medium.com/@livewise/who-am-i-c9e121787fb">
              <img src={blog1} />
              <h2>Who Am I ?</h2>
              <p className="para">
                “ I am not who you think I am; I am not who I think I am; I am
                who I think you think I am ”
              </p>
            </a>
          </div>
        </div>
        <div className="blog-card card-2">
          <div className="inner-card">
            <a href="https://medium.com/@livewise/beyond-zero-sum-mentality-7a2700181c96">
              <img src={blog2} alt="" />
              <h2>The Beauty of Uncertainty: Embracing the Unexpected!</h2>
              <p className="para">
                “ In uncertainty lie opportunities for success, happiness, and
                truly living. Embrace it.”
              </p>
            </a>
          </div>
        </div>
        <div className="blog-card card-3">
          <div className="inner-card">
            <a href="https://medium.com/@livewise/embracing-the-unknown-49f4070d8e0">
              <img src={blog3} />
              <h2>Beyond Zero-Sum Mentality!</h2>
              <p className="para">
                “Coming together is a beginning; keeping together is progress;
                working together is a success.”
              </p>
            </a>
          </div>
        </div>
        <div className="blog-card card-4">
          <div className="inner-card">
            <a href="https://medium.com/@livewise/lifes-comic-duo-the-snoopers-and-the-copiers-f6d91797734f">
              <img src={blog4} />
              <h2>Life’s Comic Duo: The Snoopers and The Copiers</h2>
              <p className="para">
                There are two types of people that I and perhaps you, have
                encountered during our time on Earth and may encounter.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
