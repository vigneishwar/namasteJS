import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div", { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am a h1 tag"),
        React.createElement("h2", {}, "Im a h2 tage"),
    ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);