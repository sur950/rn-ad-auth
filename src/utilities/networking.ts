export async function post(URL: string, data: any) {
  const formdata = new FormData();
  Object.keys(data).map((key) => {
    formdata.append(key, data[key]);
  });
  const requestOptions = {
    method: 'POST',
    body: formdata,
  };
  const response = await fetch(URL, requestOptions);
  return (await response).json();
}

export async function get(URL: string, token: any) {
  const response = await fetch(URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return (await response).json();
}
