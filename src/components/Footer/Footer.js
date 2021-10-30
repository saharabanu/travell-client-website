import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="mt-5 footer">
      <div className="">
        <div className="row">
          <div className="col-md-3  ">
            <div className="first-cart p-2 mt-2">
              
              <h6 className="mt-5">About Us</h6>
              <p>Agents</p>
              <p>Meeting & Events</p>
              <p>Corporate</p>
              <p>Investor relations</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="second-part">
              <h1 className="">Happy Travelling</h1>
              <input
                className="input-field mt-3"
                type="text"
                placeholder="name"
              />
              <br />
              <input
                className="input-field"
                type="number"
                placeholder="Phone Number"
              />
              <br />
              <input className="input-button" type="submit" value="submit" />
              <br />
              
            </div>
          </div>
          <div className="col-md-3">
            <div className="third-part">
              <h1>Useful Links</h1>
              <p className="mt-4">Create Account</p>
              <p>Company Philosophy</p>
              <p>Corporate Culture</p>
              <p>Portfolio</p>
              <p>Client Management</p>
              
            </div>
          </div>
          <div className="col-md-3">
            <div className="fourth-part">
              <h1>Contact Us</h1>
              <small className="mt-5">Office: 12 Fake Street,Dhaka</small>
              <br />
              <small className="mt-3">Phone: (08) 8827 633354</small>
              <br />
              <small className="mt-3">Fax: 08) 08 4752 1499</small>
              <br />
              <small className="mt-3">Mail: travel.officedh@gmail.com</small>
            </div>
          </div>
        </div>
        <hr />
        <div className="botton text-center">
          <small>© 2021 Travelling Theme by Sahara. All Rights Reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;