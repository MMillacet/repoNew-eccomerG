import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";
import axios, { AxiosRequestConfig } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    // If your Access Token is expired and you have a Refresh Token
    // `getAccessToken` will fetch you a new one using the `refresh_token` grant
    const { accessToken } = await getAccessToken(req, res, {
        // scopes: ["update:users"],
    });
  
    console.log(accessToken);

    const user = req.body;
    console.log({user});
  
    const config: AxiosRequestConfig = {
        method: 'PATCH',
        url: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/me`,
        headers: { authorization: `Bearer ${accessToken}`, 'content-type': 'application/json' },
        data: { 
            user_metadata: 
            {
                name: user.name,
                phone: user.phone
            }
        }
    };
    const response = await axios(config);
    console.log({ response });
    res.status(200).json(response);
  });