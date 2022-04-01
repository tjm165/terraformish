import { useEffect } from "react";
import { convertTfStateToTf } from "../functions/convertTfStateToTf";
import { CopyBlock, vs2015 } from "react-code-blocks";
import { counterKey, incrementCount } from "../functions/count";

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
  useEffect(() => {
    console.log("update");
    async function runFetch() {
      const _ = await incrementCount(counterKey.HOMEPAGE_VIEWS);
    }
    runFetch();
  }, [tfState]);

  const jsonState = tryToConvert(tfState);
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
