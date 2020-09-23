let endpoint = null;

const headers = {
  'content-type': 'application/json',
};

export const initWithEndpoint = (url) => {
  endpoint = url;
};

export const get = async (resource) => {
  return fetch( [endpoint, resource].join('/') ).then((res) => res.json())
      .then((res) => {
        return res;
      });
};


export const authorized = async (resource, item) => {
  console.log(item);
  return fetch( [endpoint, resource].join('/'),
      { headers, body: JSON.stringify(item), method: 'POST' } ).then((res) => res.json())
      .then((res) => {
        return res;
      });
};