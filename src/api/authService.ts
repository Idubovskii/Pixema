import { STUD_API_URL } from '~/constants/constants';

export interface TokenResponse {
  isOk: boolean;
  status: number;
  data: { access: string; refresh: string };
}
export const getTokensUser = async (
  email: string,
  password: string
): Promise<TokenResponse> => {
  const url = `${STUD_API_URL}auth/jwt/create/`;
  const parameters = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      password,
      email
    })
  };

  const request = new Request(url, parameters);
  const response = await fetch(request);
  const result = (await response.json()) as { access: string; refresh: string };

  return {
    isOk: response.ok,
    status: response.status,
    data: result
  };
};
