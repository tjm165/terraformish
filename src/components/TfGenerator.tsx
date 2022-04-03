import { useState } from "react";
import Tf from "./Tf";
import samples from "./samples";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import similarity from "../functions/strinigSimilarity";

const TfGenerator = ({ setShouldRefetch }: any) => {
  const [value, setValue] = useState(samples.lambda);
  const [valueSimiliarity, setValueSimilarity] = useState(100); // how similar is the last change?

  const handleValueChange = (e: any) => {
    const currentValue = e.target.value;
    const pastValue = value;

    setValueSimilarity(similarity(currentValue, pastValue));
    setValue(currentValue);
  };

  const [sample, setSample] = useState("lambda");

  const handleSampleChange = (e: any) => {
    setSample(e.target.value);
    //@ts-ignore
    setValue(samples[e.target.value]);
  };

  const tfstateHeading = (
    <Typography color="white" variant="h4">
      <div style={{ display: "flex" }}>
        <div
          style={{
            paddingLeft: "12px",
            paddingRight: "24px",
            height: "64px",
          }}
        >
          .tfstate
        </div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Examples</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sample}
              label="Examples"
              onChange={handleSampleChange}
            >
              <MenuItem value={"lambda"}>AWS Lambda</MenuItem>
              <MenuItem value={"s3"}>AWS S3</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </Typography>
  );

  const tfStateBody = (
    <textarea
      className="terraformInput"
      value={value}
      onChange={handleValueChange}
    />
  );

  const tfHeading = (
    <Typography color="white" variant="h4">
      <div style={{ display: "flex" }}>
        <div
          style={{
            paddingLeft: "12px",
            paddingRight: "24px",
            height: "64px",
          }}
        >
          .tf
        </div>
      </div>
    </Typography>
  );

  const tfBody = (
    <Tf
      tfState={value}
      similarity={valueSimiliarity}
      setShouldRefetch={setShouldRefetch}
    />
  );

  return (
    <>
      <div style={{ display: "flex", width: "100vw" }}>
        <div className="Full-width">
          <>
            {tfstateHeading}
            {tfStateBody}
          </>
        </div>

        <div className="Full-width">
          {" "}
          <>
            {tfHeading}
            {tfBody}
          </>
        </div>
      </div>
    </>
  );
};

export default TfGenerator;
