interface ResponseUsers {
  username: string;
  email: string;
  id: number;
}

interface UserActivation {
  uid: string;
  token: string;
}
export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  const url = 'https://studapi.teachmeskills.by/auth/users/';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  };
  const request = new Request(url, parameters);
  const response = await fetch(request);
  const result = (await response.json()) as ResponseUsers;

  return {
    isOk: response.ok,
    status: response.status,
    data: result
  };
};

export const activateUser = async (
  uid: string,
  token: string
): Promise<{ isOk: boolean; status: number; data: UserActivation }> => {
  const url = ' https://studapi.teachmeskills.by/auth/users/activation/';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      uid,
      token
    })
  };
  const request = new Request(url, parameters);
  const response = await fetch(request);
  const result = (await (response.ok
    ? Promise.resolve(null)
    : response.json())) as UserActivation;

  return {
    isOk: response.ok,
    status: response.status,
    data: result
  };
};
