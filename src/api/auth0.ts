import axios, { AxiosRequestConfig } from 'axios';

export interface UserMetadata {
    name: string;
    phone: string;
}

const auth0Api = {
    patch: async (userId: string, user_metadata: UserMetadata, accessToken?: string) => {
        const config: AxiosRequestConfig = {
            method: 'PATCH',
            url: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${userId}`,
            headers: { authorization: `Bearer ${accessToken}`, 'content-type': 'application/json' },
            data: {
                user_metadata,
            },
        };
        return axios(config);
    },
    info: async (accessToken?: string) => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: `${process.env.AUTH0_ISSUER_BASE_URL}/userinfo`,
            headers: { authorization: `Bearer ${accessToken}` },
        };
        const response = await axios(config);

        return response.data;
    },
};

export default auth0Api;
