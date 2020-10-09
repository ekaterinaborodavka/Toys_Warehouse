let endpoint = null;

export const initWithEndpoint = (url) => {
  endpoint = url;
};

export const headersToy = (token) => {
  const headers = {
    'content-type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
  return headers
};


export const get = async (resource, token) => {
  return fetch( [endpoint, resource].join('/'),
    { headers: headersToy(token)}).then((res) => res.json())
      .then((res) => {
        return res;
      });
};


export const authorized = async (resource, item) => {
  return fetch( [endpoint, resource].join('/'),
      { headers: {
        'content-type': 'application/json',
      }, body: JSON.stringify(item), method: 'POST' } )
      .then((res) => res.json())
      .then((res) => {
        return res.accessToken;
      });
};


export const create = async (resource, item, token) => {
  const result = await fetch( [endpoint, resource].join('/'),
      { headers: headersToy(token),
       body: JSON.stringify(item), method: 'POST' } );
  let data ={};
  if (result.ok) {
    data = await result.json();
  } else {
    throw new Error('Something went wrong');
  }
  return data;
};

export const updateMerg = async (resource, id, item, token) => {
  const result = await fetch( [endpoint, resource, id].join('/'),
      { headers: headersToy(token), 
        body: JSON.stringify(item), method: 'PATCH' } );
  let data ={};
  if (result.ok) {
    data = await result.json();
  } else {
    throw new Error('Something went wrong');
  }
  return data;
};

export const remove = async (resource, id, token) => {
  const result = await fetch( [endpoint, resource, id].join('/'),
      { headers: headersToy(token),
       method: 'DELETE' } );
  return result;
};
