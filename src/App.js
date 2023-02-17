import React from "react";
import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

function App() {


    const items = [

        {   id:'ere',
            label:'Can I use React on a project?',
            content:'You can use react on any project'
        },
        {   id:'3435',
            label:'Can I use React on a project?',
            content:'You can use react on any project'
        },
        {   id:'343',
            label:'Can I use React on a project?',
            content:'You can use react on any project'
        },
    ]

  return (
    <div>
        <Accordion items={items} />
     
    </div>
  );
}

export default App;
