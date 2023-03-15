import { Claims } from '@auth0/nextjs-auth0';
import { IUser } from '../interfaces/user';

const namespace = 'https://goldfarb:us:auth0:com';

// Transforms user in session object to our IUser
export const transformUser = (user: Claims): IUser => ({
    id: user.sub,
    email: user.email,
    name: user['name'],
    phone: user['phone'],
    cardcode: user['cardcode'],
});

export default { transformUser };
