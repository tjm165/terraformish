import React, { useState } from "react";
import Tf from "./Tf";

const TfGenerator = () => {
  const [value, setValue] = useState("{}");

  const handleValueChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input value={value} onChange={handleValueChange} />
      <Tf tfState={value} />
    </>
  );
};

export default TfGenerator;
