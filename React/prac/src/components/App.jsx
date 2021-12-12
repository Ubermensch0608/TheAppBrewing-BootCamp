import React, { useState } from "react";

function App() {
  const [newText, setNewText] = useState("");
  function textCatcher(e) {
    const newValue = e.target.value;
    setNewText(newValue);
  }

  const [addNewText, setAddNewText] = useState([]);
  function textAdditor() {
    setAddNewText((prev) => {
      return [prev, newText];
    });
    setNewText("");
  }

  const newMemo = addNewText.map((text) => {
    return (
      <table>
        <tbody className="memoCard">
          <tr>
            <td className="memoTitle">글제목</td>
          </tr>
          <tr>
            <td className="memoText">{text}</td>
          </tr>
        </tbody>
      </table>
    );
  });

  return (
    <>
      <header>
        <h1>Todo-list 보관함 입니다.</h1>
      </header>
      {newMemo}
      <input type="text" required onChange={textCatcher} value={newText} />
      <button onClick={textAdditor}>posting</button>
    </>
  );
}

export default App;
