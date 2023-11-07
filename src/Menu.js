import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Menu = () => {
  return (
    <div>
      <div className="row text-center" style={{ marginTop: "150px" }}>
        <div className="col-md-4">
          <img
            src="https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22925.jpg?size=626&ext=jpg&ga=GA1.1.1645747267.1694787492&semt=sph"
            alt=""
            style={{ width: "300px", height: "300px" }}
          />
          <h6>
            <h4>Dosa</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </p>
          </h6>
        </div>
        <div className="col-md-4">
          <img
            src="https://img.freepik.com/premium-photo/puri-bhaji-indian-semi-dry-potato-spicy-recipe-also-known-as-batata-aloo-ki-sabji-served-with-fried-poori-selective-focus_466689-12818.jpg?size=626&ext=jpg&ga=GA1.1.1645747267.1694787492&semt=sph"
            alt=""
            style={{ width: "300px", height: "300px" }}
          />
          <h6>
            <h4>Puri</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </p>
          </h6>
        </div>
        <div className="col-md-4">
          <img
            src="https://img.freepik.com/premium-photo/idli-vada-south-indian-food_57665-11421.jpg?size=626&ext=jpg&ga=GA1.1.1645747267.1694787492&semt=ais"
            alt=""
            style={{ width: "300px", height: "300px" }}
          />
          <h6>
            <h4>Idli</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </p>
          </h6>
        </div>
        <div className="col-md-4 mt-4">
          <img
            src="https://img.freepik.com/free-photo/indian-delicious-roti-with-copy-space_23-2149073353.jpg?size=626&ext=jpg&ga=GA1.1.1645747267.1694787492&semt=sph"
            alt=""
            style={{ width: "300px", height: "300px" }}
          />
          <h6>
            <h4>Chapathi</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </p>
          </h6>
        </div>
        <div className="col-md-4 mt-4">
          <img
            src="https://img.freepik.com/free-photo/healthy-vegetarian-risotto-with-fresh-garnish-generated-by-ai_188544-16141.jpg?size=626&ext=jpg&ga=GA1.1.1645747267.1694787492&semt=sph"
            alt=""
            style={{ width: "300px", height: "300px" }}
          />
          <h6>
            <h4>Upma</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </p>
          </h6>
        </div>
        <div className="col-md-4 mt-4">
          <img
            src="https://img.freepik.com/free-photo/portion-african-chapati-bean-stew-garlic-lemons_181624-57135.jpg?size=626&ext=jpg&ga=GA1.1.1645747267.1694787492&semt=sph"
            alt=""
            style={{ width: "300px", height: "300px" }}
          />
          <h6>
            <h4>Parota</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </p>
          </h6>
        </div>
      </div>
      <br />
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
export default Menu;
