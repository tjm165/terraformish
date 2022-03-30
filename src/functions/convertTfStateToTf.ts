import { Instance, TfState, Attribute } from "../types";

export const convertTfStateToTf = (tfState: TfState) => {
  const tfInstance = convertInstance(tfState.instances[0]);

  const TfString = `resource "${tfState.type}" " ${tfState.name} {${tfInstance}}"`;

  return TfString;
};

const convertInstance = (instance: Instance) => {
  let attributesTf = "";
  const attributes = instance.attributes;
  Object.keys(attributes).forEach((key) => {
    //@ts-ignore
    const attribute: Attribute = attributes[key];

    attributesTf = attributesTf.concat(
      convertInstanceAttribute(key, attribute)
    );
  });
  console.log(attributesTf);
  return attributesTf;
};

const convertInstanceAttribute = (
  key: string,
  attribute: Attribute
): string => {
  return `${key} = "${attribute}"`;
};
