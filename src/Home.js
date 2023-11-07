import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
const Home = () => {
  const [show, setShow] = useState(false);
  const [orderId, setOrderId] = useState([]);
  const [ordername, setOrderName] = useState([]);
  const [mobilenumber, setMobileNumber] = useState([]);
  const handleOpen = () => {
    setShow(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      orderId === "1" &&
      ordername === "pizza" &&
      mobilenumber === "123456789"
    ) {
      alert("ordered successfully");
      setShow(false);
    } else {
      alert("please fill all fields");
    }
  };

  const handleClick = () => {
    setOrderId("");
    setOrderName("");
    setMobileNumber("");
    setShow(false);
  };

  return (
    <div>
      <div className="image-item">
        <img
          src="https://img.freepik.com/free-photo/flat-lay-table-full-delicious-food-composition_23-2149141359.jpg?size=626&ext=jpg&ga=GA1.1.1645747267.1694787492&semt=ais"
          alt=""
          style={{ width: "100%", height: "500px" }}
        />
        <h1>Food Website</h1>
        <h5>Best Food In India</h5>
        <button className="btn btn-secondary" onClick={handleOpen}>
          ORDER NOW
        </button>
      </div>
      <div className="footer">
        <FaFacebook size={30} className="icon" />
        <FaTwitter size={30} className="icon ms-2" />
        <FaGithub size={30} className="icon ms-2" />
        <FaInstagram size={30} className="icon ms-2" />
        <p>© All rights are reserved</p>
      </div>
      {show && (
        <div className="card-content">
          <form onSubmit={submitHandler}>
            <label className="p-1">Order Id</label>
            <div>
              <input
                type="text"
                placeholder="Enter order id"
                className=" m-1 p-1"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>
            <label className="p-1">Order Name</label>
            <div>
              <input
                type="text"
                placeholder="Enter order name"
                className=" m-1 p-1"
                value={ordername}
                onChange={(e) => setOrderName(e.target.value)}
              />
            </div>
            <label className="p-1">Mobile Number</label>
            <div>
              <input
                type="text"
                placeholder="Enter mobile number"
                className="m-1 p-1"
                value={mobilenumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <button className="btn btn-success mt-2">ORDER</button>
            <button className="btn btn-danger w-20" onClick={handleClick}>
              X
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default Home;
