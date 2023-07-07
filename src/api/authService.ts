import axios from 'axios';

import { STUD_API_URL } from '~/constants/constants';

export interface TokenResponse {
  status: number;
  data: { access: string; refresh: string };
}

export const getTokensUser = async (
  email: string,
  password: string
): Promise<TokenResponse> => {
  const url = `${STUD_API_URL}auth/jwt/create/`;
  const data = {
    password,
    email
  };

  try {
    const response = await axios.post(url, data);
    const result = response.data as { access: string; refresh: string };

    return {
      status: response.status,
      data: result
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
