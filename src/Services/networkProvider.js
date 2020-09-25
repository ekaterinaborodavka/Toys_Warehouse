let endpoint = null;

export const initWithEndpoint = (url) => {
  endpoint = url;
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

export const create = async (resource, item, token) => {
  const result = await fetch( [endpoint, resource].join('/'),
      { headers:{
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }, body: JSON.stringify(item), method: 'POST' } );
  let data ={};
  if (result.status===200) {
    data = await result.json();
  } else if (!result.ok) {
    throw new Error('Something went wrong');
  }
  return data
};

export const remove = async (resource, id, token) => {
  const result = await fetch( [endpoint, resource, id].join('/'),
      { headers:{
        'content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }, method: 'DELETE' } );
  return result;
};