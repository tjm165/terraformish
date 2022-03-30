import React from "react";
import { convertTfStateToTf } from "../functions/convertTfStateToTf";

type PropTypes = {
  tfState: string;
};

const tryToConvert = (string: string) => {
  try {
    const json = JSON.parse(string);
    // console.log("JSON IS:");
    // console.log(json);
    return convertTfStateToTf(json);
  } catch (e: any) {
    console.log("Returning raw string");
    return e?.message;
  }
};

const Tf = ({ tfState }: PropTypes) => {
  const jsonState = tryToConvert(tfState);
  return <div>{JSON.stringify(jsonState)}</div>;
};

export default Tf;
