import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <img
          className="logo"
          src="https://deerdesigner.com/wp-content/uploads/green-burger-opt-3.png"
          alt="Logo"
        />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const ReasturentCrad = (props) =>
{
  
  return (
    <div className="res-card">
      <img className="res-logo"
      src="data:image/jpeg;base64,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" alt="res-logo" />
      <div className="res-card-content">
    <h3>{props.resName}</h3>
    <p>{props.cuisine }</p>
    <p>Cuisine Type • 4.5⭐</p>
    <p>₹300 for two</p>
    </div>
    </div>
  )
}



const Body = () =>{
  return(
       <div className="body">
        <div className="search">
             Search 
        </div>
        <div className="res-contener">
          <ReasturentCrad 
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
             
          />
                    <ReasturentCrad 
                    resName="KFC"
          cuisine="Fried Chiken"
          />
          <ReasturentCrad />
          <ReasturentCrad />
          <ReasturentCrad />
          <ReasturentCrad />
          <ReasturentCrad />
                    <ReasturentCrad />
          <ReasturentCrad />
          <ReasturentCrad />


        </div>
       </div>
  );
};




const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default AppLayout;







 {/* react.createElement */}
     
//  const heading = React.createElement(
//   "h1",
//   { id : "head"},
//   "SAYAK DAS 😎🎉"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

