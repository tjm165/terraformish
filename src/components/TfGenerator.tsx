import React, { useState } from "react";
import Tf from "./Tf";
import samples from "./samples";

const TfGenerator = () => {
  const [value, setValue] = useState(samples.s3);

  const handleValueChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>Terraform Generator</h1>
      <div style={{ display: "flex" }}>
        <textarea
          className="terraformInput"
          value={value}
          onChange={handleValueChange}
        />
        <Tf tfState={value} />
      </div>
    </div>
  );
};

export default TfGenerator;
