import { Instance, TfState, Attribute } from "../types";

export const convertTfStateToTf = (tfState: TfState) => {
  const instance = tfState.instances[0];
  const tfInstance = convertInstance(instance);

  const tfString =
    `resource "${tfState.type}" " ${tfState.name} {` +
    "\n" +
    `
  ${tfInstance}` +
    "\n" +
    `}`;

  console.log(tfString);
  return tfString;
};

const convertInstance = (instance: Instance) => {
  const attributes = instance.attributes;
  return convertDictToTf(attributes);
};

const convertDictToTf = (dict: Map<string, any>) => {
  let string = "";

  Object.keys(dict).forEach((key) => {
    //@ts-ignore
    const value = dict[key];
    string = string.concat(convertKeyValueToTf(key, value) + " \n");
  });

  return string;
};

const convertKeyValueToTf = (key: string, value: any) => {
  if (value === null) {
    return `${key} = null`;
  }
  if (typeof value === "string") {
    return `${key} = "${value}"`;
  }
  if (value instanceof Number) {
    return `${key} = ${value}`;
  }
  return `${key} = ${convertDictToTf(value)}`;
};
