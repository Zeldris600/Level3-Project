import React from "react";
import '../Styles/Navbar.css'
const Navbar = () => {
  return <div className="navContainer">
  <div className="item">
    <div className="callButton">
       { /*When referencing local images in react, Wrap the src in {} and if you're using webpack use require */}
        <img src={require('../Assets/Images/ChopOklok .png')} alt="" width={100} height={100} />
        
    </div>
    <div className="texts">
       <div className="img-texts">Order Now</div>
       <div className="img-texts">123456789</div> 
    </div>
  </div>
  <div className="item">
    <ul className="list">
      <li className="list-item">Homepage</li>
      <li className="list-item">Menu</li>
      <li className="list-item">Order</li>
      <img src={require('../Assets/Images/ChopOklok .png')} alt="" className="logo" />
      <li className="list-item">Book Now</li>
      <li className="list-item">About Us</li>
      <li className="list-item">Contact</li>
    </ul>
  </div>
  <div className="">
    <div className="cart">
      <img src={require('../Assets/Images/cart.png')} alt="" width={30} height={30} />
      <div className="counter">2</div>
    </div>
  </div>

  </div>;
};

export default Navbar;
