import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
   
      setExpandedIndex( currentIndex =>{

        if( currentIndex === nextIndex){
            return -1;
        }else{

            return nextIndex;
        }
      });
  
  };

  const renderedItems = items.map((item, i) => {
    const isExpanded = i === expandedIndex;

    const iconContent = isExpanded ? <AiFillCaretUp /> : <AiFillCaretRight />;

    return (
      <div key={item.id}>
        <div
          className="flex items-center p-3 bg-gray-50 border-b gap-2"
          onClick={() => handleClick(i)}
        >
          {item.label}
          {iconContent}
        </div>
        {isExpanded && <div className="border-b p-5"> {item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
