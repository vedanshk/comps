import { useState, useEffect } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);
  console.log("inside use Counter")
  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () =>{
    setCount(prevCount =>{
        if(prevCount >0){

            return prevCount-1;
        }
        return prevCount
    })
  }

  return [count , increment , decrement];
}

export default useCounter;
