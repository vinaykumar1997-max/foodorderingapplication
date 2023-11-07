import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className="text-content">
        <h2 className="fw-bold text-center">Welcome to My Restaurent</h2>
        <p className="ms-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className="ms-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="footer">
        <FaFacebook size={30} className="icon" />
        <FaTwitter size={30} className="icon ms-2" />
        <FaGithub size={30} className="icon ms-2" />
        <FaInstagram size={30} className="icon ms-2" />
        <p>© All rights are reserved</p>
      </div>
    </div>
  );
};
export default About;
