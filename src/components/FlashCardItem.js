import { useState } from "react";

export default function FlashCardItem({ question, answer }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelction = () => {
    setIsSelected(!isSelected);
  };

  return (
    <>
      {<div onClick={handleSelction} className= {isSelected ? "selected" : ""}>
        {!isSelected ? question  : answer }
      </div>}
    </>
  );
}
