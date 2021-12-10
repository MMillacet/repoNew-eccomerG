import { Claims } from '@auth0/nextjs-auth0';
import { IUser } from '../interfaces/user';

const namespace = 'https://goldfarb:us:auth0:com';

// Transforms user in session object to our IUser
export const transformUser = (user: Claims): IUser => ({
    id: user.sub,
    email: user.email,
    name: user[`${namespace}/name`],
    phone: user[`${namespace}/phone`],
    cardcode: user[`${namespace}/cardcode`],
});

export default { transformUser };
