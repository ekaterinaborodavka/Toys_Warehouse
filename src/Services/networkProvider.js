let endpoint = null;
// let token = null;

// const headers = {
//   'content-type': 'application/json',
//   'Authorization': `Bearer ${token}`
// };

export const initWithEndpoint = (url) => {
  endpoint = url;
};

export const initToken = (UserToken) => {
  // token = UserToken;
  console.log(UserToken);
};

export const get = async (resource, token) => {
  return fetch( [endpoint, resource].join('/'), {headers:{
    'content-type': 'application/json',
    'Authorization': `Bearer ${token}`
  }} ).then((res) => res.json())
      .then((res) => {
        return res;
      });
};


export const authorized = async (resource, item) => {
  return fetch( [endpoint, resource].join('/'),
      { headers:{
        'content-type': 'application/json'
      }, body: JSON.stringify(item), method: 'POST' } ).then((res) => res.json())
      .then((res) => {
        return res.accessToken;
      });
};