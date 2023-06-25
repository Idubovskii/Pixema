interface AuthUserResponse {
  username: string;
  id: number;
  email: string;
}

interface PatchEmailResponse {
  current_password: string;
  new_email: string;
}

export const getUser = async (token: string) => {
  const url = 'https://studapi.teachmeskills.by/auth/users/me/';
  const parameters = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  const request = new Request(url, parameters);
  const response = await fetch(request);
  const result = (await response.json()) as AuthUserResponse;

  return {
    ok: response.ok,
    status: response.status,
    data: result
  };
};

export const patchUser = async (token: string, username: string) => {
  const url = 'https://studapi.teachmeskills.by/auth/users/me/';
  const parameters = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      username: username
    })
  };
  const request = new Request(url, parameters);
  const response = await fetch(request);
  const result = (await response.json()) as AuthUserResponse;

  return {
    ok: response.ok,
    status: response.status,
    data: result
  };
};

export const patchEmail = async (
  token: string,
  password: string,
  email: string
) => {
  const url = 'https://studapi.teachmeskills.by/auth/users/set_email/';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      current_password: password,
      new_email: email
    })
  };
  const request = new Request(url, parameters);
  const response = await fetch(request);
  const result = (await response.json()) as PatchEmailResponse;

  return {
    ok: response.ok,
    status: response.status,
    data: result
  };
};

export const patchPassword = async (
  token: string,
  currentPassword: string,
  newPassword: string
) => {
  const url = 'https://studapi.teachmeskills.by/auth/users/set_password/';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      currentPassword: currentPassword,
      newPassword: newPassword
    })
  };
  const request = new Request(url, parameters);
  const response = await fetch(request);

  return {
    ok: response.ok,
    status: response.status
  };
};

export const fetchResetPassword = async (email: string) => {
  const url = 'https://studapi.teachmeskills.by/auth/users/reset_password/';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email: email
    })
  };
  const request = new Request(url, parameters);
  const response = await fetch(request);

  return {
    ok: response.ok,
    status: response.status
  };
};

export const fetchNewPassword = async (
  uid: string,
  token: string,
  newPassword: string
) => {
  const url =
    'https://studapi.teachmeskills.by/auth/users/reset_password_confirm/';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      uid: uid,
      token: token,
      newPassword: newPassword
    })
  };
  const request = new Request(url, parameters);
  const response = await fetch(request);

  return {
    ok: response.ok,
    status: response.status
  };
};

export const fetchRefreshToken = async (refreshToken: string) => {
  const url = 'https://studapi.teachmeskills.by/auth/jwt/refresh/';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      refresh: refreshToken
    })
  };
  const request = new Request(url, parameters);

  const response = await fetch(request);
  const result = (await response.json()) as {
    access: string;
  };

  return {
    ok: response.ok,
    status: response.status,
    data: result
  };
};
