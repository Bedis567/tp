import React from "react";
import "./styles.css";
import CustomButton from "./CustomButton";
import Textinput from "./Textinput";

const App = () => {
  return (
    <div className="App">
      <h1>TP React</h1>
      <p>Start editing to see some magic happen!</p>
      <CustomButton
        text="Click-me !"
        action={() => alert("You just click me :o")}
      />
      <br />
      <Textinput />
    </div>
  );
};

export default App;
