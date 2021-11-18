import { withApiAuthRequired, getAccessToken, getSession } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import auth0Api from "../../../api/auth0";

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
    
    const session = await getSession(req, res);
    
    if (session) {
        const { accessToken, user } = session;

        const metadata = {
            name: req.body.name,
            phone: req.body.phone,
        }
    
        try {
            const response = await auth0Api.patch(user.sub, metadata, accessToken);
            
            session.user = {
                ...session.user,
                ...metadata
            };

            res.status(200).json(response.data);
        } catch (error) {
            console.log(error);
            // todo: refactor this to return appropiate error codes
            res.status(500).json(error);
        }
    } else {
        // Should be auth because of withApiAuthRequired
        res.status(401).json({ error: 'User not authenticated' });
    }
  });