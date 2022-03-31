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
      <div style={{ display: "flex" }}>
        <div className="fullWidth">
          <h2>.tfstate</h2>
          <textarea
            className="terraformInput"
            value={value}
            onChange={handleValueChange}
          />
        </div>

        <div className="fullWidth">
          <h2>.tf</h2>

          <Tf tfState={value} />
        </div>
      </div>
    </div>
  );
};

export default TfGenerator;
