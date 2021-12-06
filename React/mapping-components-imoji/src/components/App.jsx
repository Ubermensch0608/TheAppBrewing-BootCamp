import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

const infos = emojipedia.map((oneInfo) => (
  <Card
    key={oneInfo.id}
    emoji={oneInfo.emoji}
    name={oneInfo.name}
    meaning={oneInfo.meaning}
  />
));

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{infos}</dl>
    </div>
  );
}

export default App;
