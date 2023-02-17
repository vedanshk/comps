import React from "react";
import Button from "./Button";
import { GoBell } from "react-icons/go";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div>
      <div>
        <Button primary={true} className="mb-5" onClick={handleClick}>
          <GoBell />
          Ring Bell
        </Button>
      </div>
      <div>
        <Button success outline rounded>
          Buy
        </Button>
      </div>
    </div>
  );
}

export default App;
