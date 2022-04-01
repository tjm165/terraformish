import { useState, useEffect } from "react";
import { convertTfStateToTf } from "../functions/convertTfStateToTf";
import { CopyBlock, vs2015 } from "react-code-blocks";
import { counterKey, incrementCount } from "../functions/count";
import samples from "./samples";

type PropTypes = {
  tfState: string;
  similarity: number;
};

const tryToConvert = (string: string) => {
  try {
    const json = JSON.parse(string);
    return convertTfStateToTf(json);
  } catch (e: any) {
    return `${e?.message}`;
  }
};

const Tf = ({ tfState, similarity }: PropTypes) => {
  useEffect(() => {
    const newJsonState = tryToConvert(tfState);
    setJsonState(newJsonState);

    async function runFetch() {
      console.log(`Similiarity is ${similarity} : increrment count`);
      const _ = await incrementCount(counterKey.HOMEPAGE_VIEWS);
    }
    const isNotAnError = !newJsonState.startsWith("Unexpected");
    const isNotSimilar = similarity < 0.9;
    const isNotLambdaSample = tfState !== samples.lambda;
    const isNotS3Sample = tfState !== samples.s3;
    if (isNotAnError && isNotSimilar && isNotLambdaSample && isNotS3Sample) {
      runFetch();
    }
  }, [tfState]);

  const [jsonState, setJsonState] = useState("");

  return (
    <>
      <div className="terraformOutput">
        <CopyBlock
          text={jsonState}
          language={"javascript"}
          showLineNumbers={true}
          startingLineNumber={1}
          wrapLines
          theme={vs2015}
        />
      </div>
    </>
  );
};

export default Tf;
