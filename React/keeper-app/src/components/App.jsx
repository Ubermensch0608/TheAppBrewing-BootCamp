import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const noteInfo = notes.map((info) => {
  return <Note key={info.key} title={info.title} content={info.content} />;
});
console.log(noteInfo);
function App() {
  return (
    <div>
      <Header />
      <div>{noteInfo}</div>
      <Footer />
    </div>
  );
}

export default App;
