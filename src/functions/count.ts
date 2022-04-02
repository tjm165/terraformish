type CounterConfigs = { [key: string]: CounterConfig };

type Counter = {
  namespace: string;
  key: string;
};

type CounterConfig = {
  SUCCESS_COUNT: Counter;
};

const getCounter = (counterKey: counterKey): Counter => {
  const key = process.env[`REACT_APP_${counterKey}_KEY`] || "undefined";
  const namespace =
    process.env[`REACT_APP_${counterKey}_NAMESPACE`] || "undefined";
  return { namespace, key };
};

export enum counterKey {
  SUCCESS_COUNT = "SUCCESS_COUNT",
}

export async function incrementCount(counterKey: counterKey) {
  const counter = getCounter(counterKey);
  const fetchUrl = `https://api.countapi.xyz/hit/${counter.namespace}/${counter.key}`;
  return fetch(fetchUrl);
}

export async function readCount(counterKey: counterKey) {
  const counter = getCounter(counterKey);
  const fetchUrl = `https://api.countapi.xyz/get/${counter.namespace}/${counter.key}`;
  return fetch(fetchUrl);
}
