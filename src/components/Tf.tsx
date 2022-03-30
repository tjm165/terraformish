import React from "react";

type PropTypes = {
  tfState: string;
};

const tryJsonParse = (string: string) => {
  try {
    return JSON.parse(string);
  } catch (e) {
    return string;
  }
};

const Tf = ({ tfState }: PropTypes) => {
  const jsonState = tryJsonParse(tfState);

  return <div>{JSON.stringify(jsonState)}</div>;
};

export default Tf;
