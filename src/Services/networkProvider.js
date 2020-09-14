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
