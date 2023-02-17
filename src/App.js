import React, { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {

    const [selected , setSelected] =  useState(null);

    const handleSelectedItem = ( item ) =>{

        setSelected(item);
    }

    // const items = [

    //     {   id:'ere',
    //         label:'Can I use React on a project?',
    //         content:'You can use react on any project'
    //     },
    //     {   id:'3435',
    //         label:'Is javascript is good for beginners?',
    //         content:'Yes Javascript is easy.'
    //     },
    //     {   id:'343',
    //         label:'Can i use python in unity?',
    //         content:'Python for Unity requires installing third-party software. '
    //     },
    // ]

    const options = [
        { label:'Red' , value:'do something'},
        {label:'Blue' , value:"cool"},
        {label:'Yellow' , value:'hot...'}
    ]

  return (
    <div className="flex">
        <Dropdown options={options} onSelectedItem={handleSelectedItem} selected={selected} />
        <Dropdown options={options} onSelectedItem={handleSelectedItem} selected={selected} />
    </div>
  );
}

export default App;
