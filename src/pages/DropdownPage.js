import React, { useState } from 'react'
import Dropdown from '../components/Dropdown';
function DropdownPage() {
    const [selected , setSelected] =  useState(null);

    const handleSelectedItem = ( item ) =>{

        setSelected(item);
    }

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

export default DropdownPage;