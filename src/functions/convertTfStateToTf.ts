import { Instance, TfState, Attribute } from "../types";

export const convertTfStateToTf = (tfState: TfState) => {
  const instance = tfState.instances[0];
  const tfInstance = convertInstance(instance);

  const tfString = `resource "${tfState.type}" " ${tfState.name} {${tfInstance}\n}`;
  console.log(tfString);
  return tfString;
};

const convertInstance = (instance: Instance) => {
  const attributes = instance.attributes;
  return convertDictToTf(attributes);
};

const convertDictToTf = (dict: Map<string, any>) => {
  let string = "";

  Object.keys(dict).forEach((key, i) => {
    //@ts-ignore
    const value = dict[key];

    string = string.concat(`\n    ` + convertKeyValueToTf(key, value));
  });

  return string;
};

const convertKeyValueToTf = (key: string, value: any) => {
  if (value === true) {
    return `${key} = true`;
  }
  if (value === false) {
    return `${key} = false`;
  }
  if (value === null) {
    return `${key} = null`;
  }
  if (typeof value === "string") {
    return `${key} = "${value}"`;
  }
  if (value instanceof Number) {
    return `${key} = ${value}`;
  }
  if (value instanceof Array) {
    return `${key} = ARRAY NOT SUPPORTED YET`;
  }
  return `${key} = ${convertDictToTf(value)}`;
};
