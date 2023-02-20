import React from "react";
import Button from "../components/Button";
import { GoBell } from "react-icons/go";

function ButtonPage() {


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
        <Button success>
          Buy
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
