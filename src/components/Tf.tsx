import React from "react";
import { convertTfStateToTf } from "../functions/convertTfStateToTf";
import { CopyBlock, dracula } from "react-code-blocks";
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
  return (
    <>
      <CopyBlock
        text={jsonState}
        language={"javascript"}
        showLineNumbers={true}
        startingLineNumber={1}
        wrapLines
        theme={dracula}
      />
    </>
  );
};

export default Tf;
