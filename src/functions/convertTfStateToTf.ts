import { Instance, TfState, Attribute } from "../types";

const indent = (currentIndent: string) => {
  return "    " + currentIndent;
};

export const convertTfStateToTf = (tfState: TfState) => {
  const instance = tfState.instances[0];
  const tfInstance = convertInstance(instance);

  const tfString = `resource "${tfState.type}" "${tfState.name}" {${tfInstance}\n}`;
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

const convertArrayToTf = (array: any[]) => {
  let string = "";

  if (array.length < 3) {
    array.forEach((element) => {
      string = string.concat(convertElementToTf(element));
    });
    return `[${string}]`;
  } else {
    array.forEach((element) => {
      string = string.concat(`\n    ` + convertElementToTf(element));
    });
    return `[${string}\n]`;
  }
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
  if (typeof value === "number") {
    return `${key} = ${value}`;
  }
  if (value instanceof Array) {
    return `${key} = ${convertArrayToTf(value)}`;
  }
  return `${key} = ${convertDictToTf(value)}`;
};

const convertElementToTf = (element: any) => {
  if (element === true) {
    return `true`;
  }
  if (element === false) {
    return `false`;
  }
  if (element === null) {
    return `null`;
  }
  if (typeof element === "string") {
    return `"${element}"`;
  }
  if (typeof element === "number") {
    return `${element}`;
  }
  if (element instanceof Array) {
    return `${convertArrayToTf(element)}`;
  }
  return `${convertDictToTf(element)}`;
};
