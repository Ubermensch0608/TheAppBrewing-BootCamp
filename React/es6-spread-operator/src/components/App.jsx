import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  function textCatcher(e) {
    setInputText(e.target.value);
  }

  const [addText, setAddText] = useState([]);
  function textAdittor() {
    setAddText((prev) => {
      return [...prev, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={textCatcher} value={inputText} required />
        <button onClick={textAdittor}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {addText.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
// 계획
// 1. input에 입력하면 그 정보를 얻을 수 있는 useState를 만든다.
// 2. button을 눌렀을 때 input에 있는 value를 array에 담는다.
// 3. array에 담긴 정보들을 map함수를 이용하여 <li></li>안에 표현한다.
