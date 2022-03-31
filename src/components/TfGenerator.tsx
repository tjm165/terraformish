import React, { useState } from "react";
import Tf from "./Tf";
import samples from "./samples";
import Typography from "@mui/material/Typography";

const TfGenerator = () => {
  const [value, setValue] = useState(samples.s3);

  const handleValueChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="Full-width">
          <Typography color="white" variant="h4">
            .tfstate
          </Typography>
          <textarea
            className="terraformInput"
            value={value}
            onChange={handleValueChange}
          />
        </div>

        <div className="Full-width">
          <Typography color="white" variant="h4">
            {" "}
            .tf
          </Typography>

          <Tf tfState={value} />
        </div>
      </div>
    </div>
  );
};

export default TfGenerator;
