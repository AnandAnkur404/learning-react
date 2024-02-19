const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world form react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
<div id="parent">
  <div id="child1">
    <h1>I am sibling1 of child1 under two div..</h1>
    <h2>I am heading2 of child1 under two div..</h2>
  </div>

  <div id="child2">
    <h1>I am sibling1 in under two div..</h1>
    <h2>I am sibling2 in under two div..</h2>
  </div>
</div>;
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am sibling1 of child1 under two div.."),
    React.createElement("h2", {}, "I am sibling2 of child1 under two div.."),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am sibling1 of child2 under two div.."),
    React.createElement("h2", {}, "I am sibling1 of child2 under two div.."),
  ])
);

root.render(parent);
// heading will return object.
// render method will take this heading object and create h1 tag and put it inside root element
