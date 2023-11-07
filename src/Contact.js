import React from "react";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="content">
        <h2 className="fw-bold">Contact My Restaurent</h2>
        <p className="fw-1000">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <div className="bundle">Contact Details</div>
        <div className="row">
          <div className="col-4">
            <div className="container">
              <TbDeviceLandlinePhone size={25} color="red" />
              <span className="ms-2">1800-00-0000 (tollfree)</span>
              <hr />
              <MdEmail size={25} color="indigo" />
              <span className="ms-2">help@myrest.com</span>
              <hr />
              <MdPhone size={25} color="indigo" />
              <span className="ms-2">1234567890</span>
            </div>
          </div>
        </div>
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
export default Contact;
