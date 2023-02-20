import React, { useState } from "react";
import DropdownPage from "./pages/DropdownPage";
import  AccordionPage from './pages/AccordionPage';
import ButtonPage from "./pages/ButtonPage";


function App() {

    return (
        <div>
            <AccordionPage />
            <ButtonPage />
            <DropdownPage />

        </div>
    );
}

export default App;
