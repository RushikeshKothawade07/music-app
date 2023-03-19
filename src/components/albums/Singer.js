import React from "react";
import Card from "./Card";
import SData from "./SData";
const nCard = (val) => {
  return (
    <Card
      name={val.name}
      imgsrc={val.imgsrc}
      title={val.title}
      link={val.link}

      
    />
  );
};
const Singer = () => {
  return (
    <>
      <div className="cards">{SData.map(nCard)}</div>
    </>
  );
};

export default Singer;
