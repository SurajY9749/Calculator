import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="Container">
        <div className="content-container">
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sequi
            vitae ullam ratione, fugit libero sed amet illum inventore? Sit fuga
            perspiciatis dolorem culpa temporibus laboriosam minus, harum
            laborum qui odio fugit eligendi esse deleniti alias asperiores
            cumque, exercitationem distinctio neque et cupiditate ratione eaque
            quo? Eum harum voluptas dolores quisquam, recusandae consequatur sit
          </p>
          <Link to={"login"}>
            <button className="L-btn">next</button>
          </Link>
        </div>

        <div className="img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5C1ZvRQN1S8wR6X3V3zNoxOAY6PTxWwiDA&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
