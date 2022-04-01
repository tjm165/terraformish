type CounterConfigs = { [key: string]: CounterConfig };

type Counter = {
  namespace: string;
  key: string;
};

type CounterConfig = {
  HOMEPAGE_VIEWS: Counter;
};

const counterConfigs: CounterConfigs = {
  "http://localhost:3000": {
    HOMEPAGE_VIEWS: {
      namespace: "terraformish-dev",
      key: "38843498-3bf9-4e7e-b286-4984c9879186",
    },
  },
  "http://localhost:3000/terraformish": {
    HOMEPAGE_VIEWS: {
      namespace: "terraformish-dev",
      key: "38843498-3bf9-4e7e-b286-4984c9879186",
    },
  },
};

const getCounter = (counterKey: counterKey) => {
  const href = window.location.href.replace(/\/$/, "");
  const counterConfig = counterConfigs[href];
  return counterConfig[counterKey];
};

export enum counterKey {
  HOMEPAGE_VIEWS = "HOMEPAGE_VIEWS",
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
