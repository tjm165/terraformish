export type TfState = {
  type: string;
  name: string;
  instances: Instance[];
};

export type Instance = {
  attributes: Map<string, Attribute>;
};

export type Attribute = {
  key: string;
  value: any;
};

export type Tf = {};
