import { Link } from "react-router-dom";
import Completed from "../images/completed.png";
import working from "../images/working.png";
import ideas from "../images/ideas.png";
import "./projects.css";
const Projects = () => {
  return (
    <div className="mainContainer">
      <div className="sub-container">
        <div className="complete mini-container  ">
          <div className="sub-heading">
            <img src={Completed} alt="img" />
            <h2 className="status"> Completed</h2>
          </div>
          <div className="card-1 card">
            <a href="">
              <img src="https://i.gifer.com/Q14t.gif" />
              <h2>PortFolio Website</h2>
              <p>
                Tech Stack: Developed using HTML, CSS (Grid and Flexbox), and
                React, my portfolio website is fully responsive, showcases my
                skills and achievements with an interactive touch.
              </p>
            </a>
          </div>
          <div className="card-2 card">
            <a href="">
              <img
                src="https://media.idownloadblog.com/wp-content/uploads/2019/08/SpinThatRecord-GIF.gif"
                alt=""
              />
              <h2>Hooked: Music App</h2>
              <p>
                Tech Stack: Developed using Java, XML in Android Studio with
                SQLite database.
              </p>
            </a>
          </div>
        </div>

        <div className="working-container mini-container ">
          <div className="sub-heading">
            <img src={working} alt="img" />
            <h2 className="status"> Working</h2>
          </div>
          <div className="card-1 card">
            <a href="">
              <img src="https://1771774901.rsc.cdn77.org/wa-apps/pocketlists/img/pl-logo-icon-ios-whinking.gif" />
              <h2>What Next!: Todo App</h2>
              <p>
                Tech Stack: Developed using HTML, CSS, Javascript, Nodejs and
                Expressjs.
              </p>
            </a>
          </div>

          <div className="card-2 card">
            <a href="">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVTyw336IjiTR_1ZLYnHU9z4ztX11do8G6gdPMBuGMQ&s" />
              <h2>Course Buyer</h2>
              <p>
                Tech Stack: Developed using HTML, CSS, Javascript, Nodejs and
                Expressjs.
              </p>
            </a>
          </div>
        </div>

        <div className="ideas-container mini-container ">
          <div className="sub-heading">
            <img src={ideas} alt="img" />
            <h2 className="status"> Ideas</h2>
          </div>
          <div className="card-1 card">
            <a href="">
              <img src="https://i.gifer.com/P4id.gif" />
              <h2>Coming Soon!</h2>
              <p>Thinking of somethings:)</p>
            </a>
          </div>

          <div className="card-2 card">
            <a href="">
              <img src="https://i.gifer.com/P4id.gif" />
              <h2>Coming Soon!</h2>
              <p>Thinking of somethings:)</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
