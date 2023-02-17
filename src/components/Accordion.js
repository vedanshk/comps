import { useState } from "react";
import {AiFillCaretRight} from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (nextIndex) =>{

    setExpandedIndex(nextIndex);
  };

  const renderedItems = items.map((item, i) => {
    const isExpanded = i === expandedIndex;

    const iconContent = isExpanded ? <AiFillCaretUp  /> : <AiFillCaretRight />;

    return (
      <div key={item.id}  >
        <div className="flex items-center gap-2" onClick={()=> handleClick(i) } >{item.label}
        {iconContent}
        </div>
        {isExpanded && <div> {item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
