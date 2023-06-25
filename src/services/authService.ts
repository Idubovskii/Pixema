interface TokenResponse {
  isOk: boolean;
  status: number;
  data: TokenResponse;
}
export const getTokensUser = async (
  email: string,
  password: string
): Promise<TokenResponse> => {
  const url = 'https://studapi.teachmeskills.by/auth/jwt/create/';
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
  const result = (await response.json()) as TokenResponse;

  return {
    isOk: response.ok,
    status: response.status,
    data: result
  };
};
