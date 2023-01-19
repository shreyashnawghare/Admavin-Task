import React, { useState } from "react";
import "./Boxsplit.css";

const BoxSplitter = ({ initialSize }) => {
  const [boxes, setBoxes] = useState([{ id: 0, size: initialSize }]);

  const handleClick = (id) => {
    let newBoxes = [];
    for (let box of boxes) {
      if (box.id === id) {
        for (let i = 0; i < 4; i++) {
          newBoxes.push({
            id: newBoxes.length,
            size: box.size / 2
          });
        }
      } else {
        newBoxes.push(box);
      }
    }
    setBoxes(newBoxes);
  };

  return (
    <div className="box">
      {boxes.map(box => (
        <div
          key={box.id}
          style={{
            width: `${box.size}px`,
            height: `${box.size}px`,
            background: "white",
            border: "1px solid black",
            display: "inline-block"
          }}
          onClick={() => handleClick(box.id)}
        />
      ))}
    </div>
  );
};

export default BoxSplitter;
