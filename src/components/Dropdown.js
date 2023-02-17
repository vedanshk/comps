import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, onSelectedItem, selected }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((currentValue) => !currentValue);
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelectedItem(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  let content = "Selected...";

  if (selected) {
    content = selected.label;
  }
  return (
    <div className="w-48 relative" ref={divEl}>
      <Panel
        className="flex justify-between items-center"
        onClick={handleClick}
      >
        {content}
        <GoChevronDown />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full ">{renderedOptions}</Panel>
      )}
    </div>
  );
}

export default Dropdown;
