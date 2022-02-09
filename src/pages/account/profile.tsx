import { withPageAuthRequired } from '@auth0/nextjs-auth0';
// application
import AccountLayout from '../../components/account/AccountLayout';
import AccountPageProfile from '../../components/account/AccountPageProfile';

function Page() {
    return (
        <AccountLayout>
            <AccountPageProfile />
        </AccountLayout>
    );
}

export default withPageAuthRequired(Page);
