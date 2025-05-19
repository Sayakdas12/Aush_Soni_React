import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";







const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      
    </div>
  );
};

export default AppLayout;































 

{/* react.createElement */ }

//  const heading = React.createElement(
//   "h1",
//   { id : "head"},
//   "SAYAK DAS 😎🎉"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

