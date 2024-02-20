import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
  -logo
  -Nav Items
Body
  -search
  -RestaurantsContainer
    -RestaurantsCards
      image
      name of res
      cousin
      Star rating
      price 
      delivery time
Footer
  -Copyright
  -Links
  -Address of the company
  -contacts

*/

// Header component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantsCards = (props) => {
  // console.log(props)
  const { resName , cuisine } = props;
  return (
    <div
      className="res-cards"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src="https://d1rgpf387mknul.cloudfront.net/products/PLP/ml/2x_ml_20220221050422896040_426x234jpg"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.3 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* restaurants cards */}
        <RestaurantsCards
          resName="Panjabi parathan"
          cuisine="Paratha, South cousin, Asia"
        />
        <RestaurantsCards
          resName="mumbai Nan"
          cuisine="Nan, South cousin, Asia"
        />
        
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header
      Body
      Footer */}

      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
