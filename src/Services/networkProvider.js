let endpoint = null;
let token = '';

const headers = {
  'content-type': 'application/json',
  'authorization': `Bearer[${token}]`
};

export const initWithEndpoint = (url) => {
  endpoint = url;
};

export const initToken = (UserToken) => {
  token = UserToken;
  console.log(UserToken);
};

export const get = async (resource) => {
  return fetch( [endpoint, resource].join('/') ).then((res) => res.json())
      .then((res) => {
        return res;
      });
};


export const authorized = async (resource, item) => {
  return fetch( [endpoint, resource].join('/'),
      { headers, body: JSON.stringify(item), method: 'POST' } ).then((res) => res.json())
      .then((res) => {
        return res.accessToken;
      });
};