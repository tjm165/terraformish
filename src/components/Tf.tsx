import React from "react";
import { convertTfStateToTf } from "../functions/convertTfStateToTf";

type PropTypes = {
  tfState: string;
};

const tryToConvert = (string: string) => {
  try {
    const json = JSON.parse(string);
    return convertTfStateToTf(json);
  } catch (e: any) {
    return e?.message;
  }
};

const Tf = ({ tfState }: PropTypes) => {
  const jsonState = tryToConvert(tfState);
  return <code>{JSON.stringify(jsonState)}</code>;
};

export default Tf;
