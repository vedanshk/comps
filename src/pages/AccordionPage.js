import React from "react";
import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "ere",
      label: "Can I use React on a project?",
      content: "You can use react on any project",
    },
    {
      id: "3435",
      label: "Is javascript is good for beginners?",
      content: "Yes Javascript is easy.",
    },
    {
      id: "343",
      label: "Can i use python in unity?",
      content: "Python for Unity requires installing third-party software. ",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
