import React from "react";

class Keypad extends React.Component {
  render() {
    return (
      <div>
        <input
          onKeyUp={() => console.log("Entering password...")}
          type="password"
        />
      </div>
    );
  }
}

export default Keypad;
