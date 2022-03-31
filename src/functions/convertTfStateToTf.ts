import { Instance, TfState, Attribute } from "../types";

const indent = (currentIndent: string) => {
  return "  " + currentIndent;
};

export const convertTfStateToTf = (tfState: TfState) => {
  const instance = tfState.instances[0];
  const tfInstance = convertInstance(instance, "");

  const tfString = `resource "${tfState.type}" "${tfState.name}" {${tfInstance}\n}`;
  return tfString;
};

const convertInstance = (instance: Instance, currentIndent: string) => {
  const attributes = instance.attributes;
  return convertDictToTf(attributes, indent(currentIndent));
};

const convertDictToTf = (dict: Map<string, any>, currentIndent: string) => {
  let string = "";

  Object.keys(dict).forEach((key, i) => {
    //@ts-ignore
    const value = dict[key];

    string = string.concat(
      `\n` +
        indent(currentIndent) +
        convertKeyValueToTf(key, value, indent(currentIndent))
    );
  });

  return string;
};

const convertArrayToTf = (array: any[], currentIndent: string) => {
  let string = "";

  array.forEach((element, i) => {
    string = string.concat(convertElementToTf(element, indent(currentIndent)));

    if (i < array.length - 1) {
      string = string.concat(", ");
    }
  });
  return `[${string}]`;
};

const convertKeyValueToTf = (
  key: string,
  value: any,
  currentIndent: string
) => {
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
    return `${key} = ${convertArrayToTf(value, indent(currentIndent))}`;
  }
  return `${key} = ${convertDictToTf(value, indent(currentIndent))}`;
};

const convertElementToTf = (element: any, currentIndent: string) => {
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
    return `${convertArrayToTf(element, indent(currentIndent))}`;
  }
  return `${convertDictToTf(element, indent(currentIndent))}`;
};
