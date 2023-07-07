import axios from 'axios';

import { STUD_API_URL } from '~/constants/constants';

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
  const url = `${STUD_API_URL}auth/users/`;
  const data = {
    username,
    email,
    password
  };

  const response = await axios.post<ResponseUsers>(url, data, {
    headers: {
      'Content-type': 'application/json'
    }
  });

  return {
    isOk: response.status === 200,
    status: response.status,
    data: response.data
  };
};

export const activateUser = async (
  uid: string,
  token: string
): Promise<{ isOk: boolean; status: number; data: UserActivation }> => {
  const url = `${STUD_API_URL}auth/users/activation/`;
  const data = {
    uid,
    token
  };

  try {
    const response = await axios.post<UserActivation>(url, data, {
      headers: {
        'Content-type': 'application/json'
      }
    });

    return {
      isOk: response.status === 200,
      status: response.status,
      data: response.data
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
