import { getAccessToken, getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next'

const auth0Url = 'https://goldfarb.us.auth0.com';


export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  // If your Access Token is expired and you have a Refresh Token
  // `getAccessToken` will fetch you a new one using the `refresh_token` grant
  const { accessToken } = await getAccessToken(req, res);

  const response = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/userinfo`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  const userinfo = await response.json();
  res.status(200).json(userinfo);
});