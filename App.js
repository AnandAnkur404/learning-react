// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world form react"
// );

//  root.render(heading); 

import React from "react";
import  ReactDOM  from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Heading h1 from ankur"),
    React.createElement("h2", {}, "Heading h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Heading h1"),
    React.createElement("h2", {}, "Heading h2"),
  ]),
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// heading will return object.
// render method will take this heading object and create h1 tag and put it inside root element
